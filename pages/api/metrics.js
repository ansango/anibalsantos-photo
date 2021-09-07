/* eslint-disable import/no-anonymous-default-export */

import { getAllFilesFrontMatter } from '@/lib/mdx'

export default async (_, res) => {
  try {
    const posts = await getAllFilesFrontMatter('stories')
    console.log(posts)
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

    const items = {
      places: [...new Set(raw.flatMap((post) => post.places))],
      placesLength: [...new Set(raw.flatMap((post) => post.places))].length,
      areas: [...new Set(raw.flatMap((post) => post.areas))],
      areasLength: [...new Set(raw.flatMap((post) => post.areas))].length,
      countries: [...new Set(raw.flatMap((post) => post.countries))],
      countriesLength: [...new Set(raw.flatMap((post) => post.countries))].length,
      images: raw.flatMap((post) => post.images).length,
    }

    return res.status(200).json({ items })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
