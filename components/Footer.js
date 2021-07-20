import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="pt-20 xl:pt-48">
      <div className="flex flex-col items-center mt-16 m-3">
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href={'https://ansango.com'}>{siteMetadata.author}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
