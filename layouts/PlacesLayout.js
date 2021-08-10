import Places from '@/components/Places'
import PlacesGallery from '@/components/PlacesGallery'
import { useState } from 'react'

export default function PlacesLayout({ posts }) {
  const allLocationsPosts = posts
    .map((post) => {
      return post.galleryMap.map((loc) => {
        return { slug: post.slug, ...loc }
      })
    })
    .flat()

  const mapSettings = { coordinates: allLocationsPosts, center: [40.965, -5.664], zoom: 15 }

  const [place, setPlace] = useState('')

  const addPlaceHandler = (place) => {
    setPlace('')
    setPlace(place)
  }
  return (
    <div>
      <Places mapSettings={mapSettings} onLocationSelected={addPlaceHandler} viewPage={true} />
      <PlacesGallery galleryMap={allLocationsPosts} place={place} />
    </div>
  )
}
