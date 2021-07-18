import Image from '@/components/Image'
import Link from '@/components/Link'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core'

SwiperCore.use([Pagination])

const Carousel = ({ data }) => {
  const { slug, images } = data

  return (
    <Swiper
      className="w-full h-full"
      slidesPerView={2}
      spaceBetween={10}
      width={320}
      breakpoints={{
        576: { width: 768, spaceBetween: 30 },
        768: { width: 992, slidesPerView: 3, spaceBetween: 40 },
        992: { width: 1024, slidesPerView: 3, spaceBetween: 40 },
        1024: { width: 1200, slidesPerView: 3, spaceBetween: 40 },
        1200: { width: 1600, slidesPerView: 3, spaceBetween: 40 },
        1600: { width: 1920, slidesPerView: 3, spaceBetween: 40 },
      }}
    >
      {images.map((panel, index) => (
        <SwiperSlide key={index}>
          <Link href={`/stories/${slug}`}>
            <Image className="rounded-md" alt="" src={panel} width={768} height={512} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
