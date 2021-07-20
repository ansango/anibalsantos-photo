import { useTheme } from 'next-themes'
import Image from './Image'
import Link from './Link'

const bannerImgs = {
  light: {
    href: '/stories/2018-03-30',
    big: '/static/stories/2018-03-30/16.jpg',
    sm1: '/static/stories/2018-03-30/15.jpg',
    sm2: '/static/stories/2018-03-30/14.jpg',
  },
  dark: {
    href: '/stories/2013-10-30',
    big: '/static/stories/2013-10-30/22.jpg',
    sm1: '/static/stories/2013-10-30/03.jpg',
    sm2: '/static/stories/2013-10-30/06.jpg',
  },
}

const Banner = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <Link
      href={isDark ? bannerImgs.dark.href : bannerImgs.light.href}
      className="flex justify-center px-5 xl:px-10 pt-24"
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
