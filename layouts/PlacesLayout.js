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
  const [isLoading, setisILoading] = useState(false)
  const addPlaceHandler = (_place) => {
    setisILoading(true)
    setPlace('')
    setPlace(_place)
    setTimeout(() => setisILoading(false), 1000)
  }

  return (
    <div className="grid grid-cols-2">
      <Places
        mapSettings={mapSettings}
        onLocationSelected={addPlaceHandler}
        viewPage={true}
        title="All places where I shooted"
      />
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <PlacesGallery galleryMap={allLocationsPosts} place={place} />
      )}
    </div>
  )
}
