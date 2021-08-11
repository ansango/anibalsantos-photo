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
    const areas = post.galleryMap.map((data) => data.place.area)
    const countries = post.galleryMap.map((data) => data.place.country)
    const images = post.galleryMap.flatMap((data) => data.img)

    return {
      places: places,
      areas: areas,
      countries: countries,
      images: images,
    }
  })

  const data = {
    places: [...new Set(raw.flatMap((post) => post.places))],
    placesLength: [...new Set(raw.flatMap((post) => post.places))].length,
    areas: [...new Set(raw.flatMap((post) => post.areas))],
    areasLength: [...new Set(raw.flatMap((post) => post.areas))].length,
    countries: [...new Set(raw.flatMap((post) => post.countries))],
    countriesLength: [...new Set(raw.flatMap((post) => post.countries))].length,
    images: raw.flatMap((post) => post.images).length,
  }

  const mapSettings = { coordinates: allLocationsPosts, center: [44.965, -5.664], zoom: 4 }

  const [place, setPlace] = useState(null)
  const [isLoading, setIsILoading] = useState(false)
  const addPlaceHandler = (_place) => {
    setIsILoading(true)
    setPlace('')
    setPlace(_place)
    setTimeout(() => setIsILoading(false), 1000)
  }
  return (
    <div className="w-full max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-screen-lg xl:max-w-screen-2xl">
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
            route="/places#gallery"
          />
        </div>
        <div>
          <ListSelector
            data={data.areas}
            title="Total areas"
            counter={data.areasLength}
            emoji="🏙️"
            label="Select an area"
            onLocationSelected={addPlaceHandler}
            route="/places#gallery"
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
            route="/places#gallery"
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
        <div id="gallery" className="py-10">
          {isLoading ? (
            <>
              <div className="max-w-xl w-full mx-auto pb-5">
                <FillLoader amount={1} Component={TitleLoader} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                <FillLoader amount={6} Component={CardLoader} />
              </div>
            </>
          ) : (
            <PlacesGallery galleryMap={allLocationsPosts} place={place} />
          )}
        </div>
      </div>
    </div>
  )
}
