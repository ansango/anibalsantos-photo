import Places from '@/components/Places'
import removeDuplicates from '@/lib/utils/removeDuplicates'

export default function PlacesLayout({ posts }) {
  const AllLocationsPosts = posts
    .map((post) => {
      return post.location.map((loc) => {
        return { slug: post.slug, ...loc }
      })
    })
    .flat()
  const locations = removeDuplicates(AllLocationsPosts, (location) => location.name)
  const mapSettings = { coordinates: locations, center: [43.0, 3.0], zoom: 4 }

  return (
    <div>
      <Places mapSettings={mapSettings} />
    </div>
  )
}
