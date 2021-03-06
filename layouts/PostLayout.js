import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ImageStorie from '@/components/ImageStorie'
import PlaceText from '@/components/PlaceText'
import Places from '@/components/Places'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, title, tags, galleryMap, mapCenter, mapZoom } = frontMatter
  const gallery = galleryMap.flatMap((data) => data.img)
  const placesData = galleryMap.map((data) => data.place.name)
  const mapSettings = { coordinates: galleryMap, center: mapCenter, zoom: mapZoom }
  return (
    <SectionContainer>
      <BlogSeo
        url={`${siteMetadata.siteUrl}/stories/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>

          <div className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>
            <div>
              <ImageStorie gallery={gallery} />
              <div className="py-16">
                <Places mapSettings={mapSettings} title="Locations" />
              </div>
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="lg:flex justify-between py-4 xl:py-8">
                    <div className="py-2">
                      <div className="flex flex-wrap">
                        <span className="mr-2" role="img" aria-label="">
                          ????
                        </span>
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center">
                      {placesData.map((place, index) => (
                        <PlaceText key={index} text={place} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:py-8">
                    {!prev && <div></div>}
                    {prev && (
                      <div className="text-left">
                        <h2 className="text-xs tracking-wide text-gray-500 italic dark:text-gray-400">
                          Previous
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/stories/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {!next && <div></div>}
                    {next && (
                      <div className="text-right">
                        <h2 className="text-xs tracking-wide text-gray-500 italic dark:text-gray-400">
                          Next
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/stories/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/stories"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold"
                >
                  &larr; Stories
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
