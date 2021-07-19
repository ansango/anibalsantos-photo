import { useState } from 'react'
import Image from './Image'
import Modal from './Modal'
import { isMobile } from 'react-device-detect'

const ImageStorie = ({ gallery }) => {
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
      {showModal && !isMobile && <Modal onClose={onCloseHandler} onImg={srcImg} />}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-7 lg:grid-cols-3 pt-10">
        {gallery.map((src, index) => {
          return (
            <button
              className="md:transform md:transition md:duration-500 md:hover:scale-105"
              key={index}
              onClick={() => onOpenHandler(src)}
            >
              <Image
                className="rounded-md"
                src={src}
                alt=""
                width={680}
                height={420}
                quality={33}
              />
            </button>
          )
        })}
      </div>
    </>
  )
}
export default ImageStorie
