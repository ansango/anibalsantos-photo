import { useTheme } from 'next-themes'
import Image from './Image'
import Link from './Link'

const url = 'https://res.cloudinary.com/ansango/image/upload/v1631204931/ansango-photo'

const lightAlbum = '2014-04-11'
const darkAlbum = '2013-10-30'

const bannerImgs = {
  light: {
    href: `/stories/${lightAlbum}`,
    big: `${url}/${lightAlbum}/06.jpg`,
    sm1: `${url}/${lightAlbum}/05.jpg`,
    sm2: `${url}/${lightAlbum}/04.jpg`,
  },
  dark: {
    href: `/stories/${darkAlbum}`,
    big: `${url}/${darkAlbum}/22.jpg`,
    sm1: `${url}/${darkAlbum}/03.jpg`,
    sm2: `${url}/${darkAlbum}/06.jpg`,
  },
}

const Banner = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <Link
      href={isDark ? bannerImgs.dark.href : bannerImgs.light.href}
      className="flex justify-center px-5 pt-8 lg:pt-24 xl:px-10 "
    >
      <div className="flex items-center xl:pr-4">
        {!isDark && (
          <Image
            className="rounded-md"
            src={bannerImgs.light.big}
            alt={'banner'}
            width={1232}
            height={780}
            quality={75}
          />
        )}
        {isDark && (
          <Image
            className="rounded-md"
            src={bannerImgs.dark.big}
            alt={'banner'}
            width={1232}
            height={780}
            quality={75}
          />
        )}
      </div>
      <div className="hidden xl:flex flex-col items-center space-y-2">
        <div className="flex-col items-center">
          {!isDark && (
            <Image
              className="rounded-md"
              src={bannerImgs.light.sm1}
              alt={'banner'}
              width={615}
              height={380}
              quality={50}
            />
          )}
          {isDark && (
            <Image
              className="rounded-md"
              src={bannerImgs.dark.sm1}
              alt={'banner'}
              width={615}
              height={380}
              quality={50}
            />
          )}
        </div>
        <div className="flex-col items-center">
          {!isDark && (
            <Image
              className="rounded-md"
              src={bannerImgs.light.sm2}
              alt={'banner'}
              width={615}
              height={380}
              quality={50}
            />
          )}
          {isDark && (
            <Image
              className="rounded-md"
              src={bannerImgs.dark.sm2}
              alt={'banner'}
              width={615}
              height={380}
              quality={50}
            />
          )}
        </div>
      </div>
    </Link>
  )
}
export default Banner
