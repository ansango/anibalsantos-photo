import Image from '@/components/Image'
import { useState } from 'react'
import Modal from './Modal'

const PlacesGallery = ({ galleryMap, place }) => {
  const data = galleryMap.filter((loc) => loc.place.name === place || loc.place.city === place)
  const gallery = data.map((item) => item.img).flat()

  const [showModal, setShowModal] = useState(false)
  const [srcImg, setSrcImg] = useState('')
  const onCloseHandler = (event) => {
    setShowModal(false)
  }
  const onOpenHandler = (src) => {
    setSrcImg(src)
    setShowModal(true)
  }

  return (
    <>
      {showModal && <Modal onClose={onCloseHandler} onImg={srcImg} />}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {gallery.map((src, index) => {
          return (
            <div key={index} className="relative">
              <Image
                onClick={() => onOpenHandler(src)}
                className="rounded-md cursor-pointer hover:bg-transparent hover:opacity-75 transition duration-500 ease-in-out"
                src={src}
                alt=""
                width={680}
                height={420}
                quality={33}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PlacesGallery
