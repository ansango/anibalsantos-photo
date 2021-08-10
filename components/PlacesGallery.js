import Image from '@/components/Image'

const PlacesGallery = ({ galleryMap, place }) => {
  const data = galleryMap.filter((loc) => loc.name === place)
  const gallery = data.map((item) => item.img).flat()

  return (
    <div>
      <div>{place}</div>
      <div className="px-16">
        <>
          <div className="">
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
        </>
      </div>
    </div>
  )
}

export default PlacesGallery
