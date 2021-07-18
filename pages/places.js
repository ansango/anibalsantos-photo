import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('stories')

  return { props: { posts } }
}

const DEFAULT_CENTER = [38.907132, -77.036546]

export default function Places({ posts }) {
  const { location } = posts
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
    </>
  )
}
