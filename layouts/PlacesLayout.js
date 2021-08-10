import ImageStorie from '@/components/ImageStorie'
import Places from '@/components/Places'
import { useState } from 'react'

const PhotoGallery = ({ galleryMap, place }) => {
  const data = galleryMap.filter((loc) => loc.name === place)
  const gallery = data.map((item) => item.img).flat()
  return (
    <div>
      <div>{place}</div>
      <div className="px-16">
        <ImageStorie gallery={gallery} />
      </div>
    </div>
  )
}

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
      <Places mapSettings={mapSettings} onLocationSelected={addPlaceHandler} />
      <PhotoGallery galleryMap={allLocationsPosts} place={place} />
    </div>
  )
}
