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

  const mapSettings = { coordinates: allLocationsPosts, center: [40.965, -5.664], zoom: 5 }

  const [place, setPlace] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const addPlaceHandler = (place) => {
    setIsLoading(true)
    setPlace('')
    setPlace(place)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  return (
    <div>
      <Places
        mapSettings={mapSettings}
        onLocationSelected={addPlaceHandler}
        viewPage={true}
        title="All places where I shooted"
      />
      {isLoading && <p>Loading</p>}
      {!isLoading && <PlacesGallery galleryMap={allLocationsPosts} place={place} />}
    </div>
  )
}
