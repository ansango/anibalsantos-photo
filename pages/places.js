import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import dynamic from 'next/dynamic'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('stories')

  return { props: { posts } }
}

export default function Places({ posts }) {
  const locations = posts.map((post) => post.location)
  const MapWithNoSSR = dynamic(() => import('../components/MapLeaf'), {
    ssr: false,
  })
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <MapWithNoSSR data={locations} />
    </>
  )
}
