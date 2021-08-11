import { PageSeo } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import PlacesLayout from '@/layouts/PlacesLayout'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('stories')

  return { props: { posts } }
}

export default function Places({ posts }) {
  const entries = posts.map(({ draft, date, summary, tags, title, ...keepAttr }) => keepAttr)

  return (
    <>
      <PageSeo title={`Places`} description={siteMetadata.description} />
      <PlacesLayout posts={entries} />
    </>
  )
}
