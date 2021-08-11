import PageTitle from '@/components/PageTitle'
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
  const data = {
    locations: allLocationsPosts.length,
  }
  const mapSettings = { coordinates: allLocationsPosts, center: [40.965, -5.664], zoom: 5 }

  const [place, setPlace] = useState(null)
  const [isLoading, setisILoading] = useState(false)
  const addPlaceHandler = (_place) => {
    setisILoading(true)
    setPlace('')
    setPlace(_place)
    setTimeout(() => setisILoading(false), 1000)
  }

  return (
    <div className="px-5">
      <PageTitle>{'All places where I shooted'}</PageTitle>
      <div>Locations: {data.locations}</div>
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:pr-5">
          <Places mapSettings={mapSettings} onLocationSelected={addPlaceHandler} viewPage={true} />
          {place && !isLoading && (
            <div>
              <div className="text-center">
                <h3 className="font-bold text-3xl md:text-4xl py-6 md:py-8">
                  {place}
                  <span className="text-2xl md:text-3xl" role="img" aria-label="">
                    📍
                  </span>
                </h3>
              </div>
            </div>
          )}
        </div>
        {isLoading ? (
          <>
            <div>Loading</div>
          </>
        ) : (
          <PlacesGallery galleryMap={allLocationsPosts} place={place} />
        )}
      </div>
    </div>
  )
}
