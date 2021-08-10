import Places from '@/components/Places'

export default function PlacesLayout({ posts }) {
  const locations = posts
    .map((post) => {
      return post.location.map((loc) => {
        return { slug: post.slug, ...loc }
      })
    })
    .flat()

  const mapSettings = { coordinates: locations, center: [43.0, 3.0], zoom: 4 }

  return (
    <div>
      <Places mapSettings={mapSettings} />
    </div>
  )
}
