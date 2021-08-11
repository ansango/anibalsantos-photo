import Image from '@/components/Image'
import { CookieIcon, ExpandIcon } from './icons'

const PlacesGallery = ({ galleryMap, place }) => {
  const data = galleryMap.filter((loc) => loc.name === place)
  const gallery = data.map((item) => item.img).flat()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
      {gallery.map((src, index) => {
        return (
          <div key={index} className="relative">
            <Image className="rounded-md" src={src} alt="" width={680} height={420} quality={33} />
            <ExpandIcon size={25} className="absolute right-5 bottom-5 text-primary-100" />
          </div>
        )
      })}
    </div>
  )
}

export default PlacesGallery
