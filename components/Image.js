import NextImage from 'next/image'
import { useState } from 'react'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const onLoadHandler = () => {
    setIsLoaded(true)
  }
  return (
    <div
      className="opacity-0 transition-opacity duration-700"
      style={{ opacity: isLoaded ? '100' : '0' }}
    >
      <NextImage {...rest} onLoad={onLoadHandler} />
    </div>
  )
}

export default Image
