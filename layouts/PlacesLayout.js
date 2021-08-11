import { CardLoader, FillLoader, TitleLoader } from '@/components/Loader'
import Accordion from '@/components/Accordion'
import PageTitle from '@/components/PageTitle'
import Places from '@/components/Places'
import PlacesGallery from '@/components/PlacesGallery'
import { useState } from 'react'
import ListSelector from '@/components/ListSelector'

export default function PlacesLayout({ posts }) {
  const allLocationsPosts = posts.flatMap((post) => {
    return post.galleryMap.map((loc) => {
      return { slug: post.slug, ...loc }
    })
  })

  const raw = posts.map((post) => {
    const places = post.places.map((place) => place.name)
    const countries = post.places.map((place) => place.country)
    const images = post.galleryMap.flatMap((place) => place.img)
    return {
      places: places,
      countries: countries,
      images: images,
    }
  })

  const data = {
    places: [...new Set(raw.flatMap((post) => post.places))],
    placesLength: [...new Set(raw.flatMap((post) => post.places))].length,
    countries: [...new Set(raw.flatMap((post) => post.countries))],
    countriesLength: [...new Set(raw.flatMap((post) => post.countries))].length,
    images: raw.flatMap((post) => post.images).length,
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
      <div className="py-8 grid gap-5 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-3">
          <Places mapSettings={mapSettings} onLocationSelected={addPlaceHandler} viewPage={true} />
        </div>
        <div>
          <ListSelector data={data.places} title={`Places - ${data.placesLength}`} />
          {/* <Accordion data={data.places} title={`📍 Places - ${data.placesLength}`} /> */}
        </div>

        <div>
          <ListSelector data={data.countries} title={`Countries - ${data.countriesLength}`} />
          {/* <Accordion data={data.countries} title={`🌍 Countries - ${data.countriesLength}`} /> */}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {place && !isLoading && (
          <h3 className="font-bold text-3xl md:text-4xl py-6 md:py-8 text-center">
            {place}
            <span className="text-2xl md:text-3xl" role="img" aria-label="">
              📍
            </span>
          </h3>
        )}

        {isLoading ? (
          <>
            <div className="max-w-xl w-full mx-auto">
              <FillLoader amount={1} Component={TitleLoader} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
              <FillLoader amount={6} Component={CardLoader} />
            </div>
          </>
        ) : (
          <PlacesGallery galleryMap={allLocationsPosts} place={place} />
        )}
      </div>
    </div>
  )
}
