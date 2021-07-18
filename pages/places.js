import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import dynamic from 'next/dynamic'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('stories')

  return { props: { posts } }
}

export default function Places({ posts }) {
  const { location } = posts
  const MapWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false,
  })
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />

      <MapWithNoSSR />
    </>
  )
}
