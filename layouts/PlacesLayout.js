import { CardLoader, FillLoader, TitleLoader } from '@/components/Loader'
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
    const places = post.galleryMap.map((data) => data.place.name)
    const cities = post.galleryMap.map((data) => data.place.city)
    const countries = post.galleryMap.map((data) => data.place.country)
    const images = post.galleryMap.flatMap((data) => data.img)
    return {
      places: places,
      cities: cities,
      countries: countries,
      images: images,
    }
  })

  const data = {
    places: [...new Set(raw.flatMap((post) => post.places))],
    placesLength: [...new Set(raw.flatMap((post) => post.places))].length,
    cities: [...new Set(raw.flatMap((post) => post.cities))],
    citiesLength: [...new Set(raw.flatMap((post) => post.cities))].length,
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
      <PageTitle>All places where I shooted</PageTitle>
      <h2 className="font-bold text-xl md:text-2xl pt-2">
        <span role="img" aria-label="">
          📸
        </span>
        Total shoots - {data.images}
      </h2>
      <div className="py-8 grid gap-5 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-3">
          <Places mapSettings={mapSettings} onLocationSelected={addPlaceHandler} viewPage={true} />
        </div>
        <div>
          <ListSelector
            data={data.places}
            title="Total places"
            counter={data.placesLength}
            emoji="📍"
            label="Select a place"
            onLocationSelected={addPlaceHandler}
          />
        </div>

        <div>
          <ListSelector
            data={data.countries}
            title="Total countries"
            counter={data.countriesLength}
            emoji="🌍"
            label="Select a country"
            onLocationSelected={addPlaceHandler}
          />
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
