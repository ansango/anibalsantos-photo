import Image from '@/components/Image'
import { useState } from 'react'
import Modal from './Modal'

const MAX_IMAGES = 12

const PlacesGallery = ({ galleryMap, place }) => {
  const data = galleryMap.filter(
    (loc) => loc.place.name === place || loc.place.area === place || loc.place.country === place
  )
  const gallery = data.map((item) => item.img).flat()

  const [images, setImages] = useState(gallery)
  const [currentPage, setCurrentPage] = useState(1)

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }

  // Logic for displaying imgs

  const indexOfLastImg = currentPage * MAX_IMAGES
  const indexOfFirstImg = indexOfLastImg - MAX_IMAGES
  const currentImgs = images.slice(indexOfFirstImg, indexOfLastImg)

  // Logic for displaying page numbers
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(images.length / MAX_IMAGES); i++) {
    pageNumbers.push(i)
  }

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
        {currentImgs.map((src, index) => {
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
      <div className="flex justify-center py-3">
        {pageNumbers.map((number) => {
          return (
            <button
              className="p-5 text-lg text-primary-600 font-bold hover:text-primary-400"
              key={number}
              id={number}
              onClick={handleClick}
            >
              {number}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default PlacesGallery
