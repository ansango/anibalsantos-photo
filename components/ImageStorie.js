import { useState } from 'react'
import Image from './Image'
import Modal from './Modal'

const ImageStorie = ({ gallery }) => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({})
  const [src, setSrc] = useState('')
  const onCloseHandler = (event) => {
    setShowModal(false)
    setData({})
  }
  const onOpenHandler = () => {
    setShowModal(true)
    console.log(src)
    setData({ image: src })
  }
  const onEnterKey = (event) => {
    if (event.key === 'Enter') {
      onOpenHandler()
    }
  }
  return (
    <>
      {showModal && <Modal onClose={onCloseHandler} data={data} />}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
        {gallery.map((src, index) => {
          return (
            <div
              className="cursor-pointer md:transform md:transition md:duration-500 md:hover:scale-105"
              key={index}
              onClick={onOpenHandler}
              onKeyPress={onEnterKey}
              role="button"
              tabIndex="0"
            >
              <Image className="rounded-md" src={src} alt="" width={768} height={473} />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default ImageStorie
