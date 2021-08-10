import { useTheme } from 'next-themes'
import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <>
      <NextImage
        {...rest}
        objectFit={true}
        placeholder="blur"
        blurDataURL={isDark ? '/static/images/blur-dark.jpg' : '/static/images/blur-light.jpg'}
      />
    </>
  )
}

export default Image
