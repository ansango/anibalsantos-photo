import Image from '@/components/Image'
import SectionContainer from '@/components/SectionContainer'
import { PageSeo } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar } = frontMatter

  return (
    <SectionContainer>
      <PageSeo title={`About - ${name}`} description={`About me - ${name}`} />
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold lowercase leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {name}
          </h1>
        </div>
        <div className="">
          <Image src={avatar} alt="avatar" width={700} height={630} />
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div>
        </div>
      </div>
    </SectionContainer>
  )
}
