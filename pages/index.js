import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Carousel from '@/components/Carousel'
import Image from '@/components/Image'
import Banner from '@/components/Banner'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('stories')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5 px-5 md:px-20">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            ansango photo
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <Banner />
        {!posts.length && 'No posts found.'}
        <div className="grid gap-3 lg:gap-5 pt-24 pb-16 lg:pt-48 lg:pb-24 pl-5 md:pl-16">
          {posts.slice(0, MAX_DISPLAY).map((frontMatter, index) => {
            return <Carousel data={frontMatter} key={index} />
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6 px-8 lg:px-32">
          <Link
            href="/stories"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold"
            aria-label="stories"
          >
            Stories &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
