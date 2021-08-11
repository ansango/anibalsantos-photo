import Image from '@/components/Image'

const PlacesGallery = ({ galleryMap, place }) => {
  const data = galleryMap.filter((loc) => loc.name === place)
  const gallery = data.map((item) => item.img).flat()

  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
          {gallery.map((src, index) => {
            return (
              <Image
                key={index}
                className="rounded-md"
                src={src}
                alt=""
                width={680}
                height={420}
                quality={33}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PlacesGallery
