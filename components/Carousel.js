import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import Image from '@/components/Image'
import Link from '@/components/Link'

const Carousel = ({ data }) => {
  const { slug, images } = data

  return (
    <>
      <Link
        key={`${slug}-desktop`}
        href={`/stories/${slug}`}
        className="pt-20 pb-10 hidden lg:block"
      >
        <Flicking align="prev" interruptable={false} moveType="freeScroll" bound={true}>
          {images.map((panel, index) => (
            <div key={index} className="px-4">
              <Image className="rounded-md" alt="" src={panel} width={768} height={476} />
            </div>
          ))}
        </Flicking>
      </Link>
      <Link key={`${slug}-mobile`} href={`/stories/${slug}`} className="lg:hidden">
        <Flicking align="prev" interruptable={false} moveType="freeScroll" bound={true}>
          {images.map((panel, index) => (
            <div key={index} className="px-2">
              <Image className="rounded-md" alt="" src={panel} width={320} height={200} />
            </div>
          ))}
        </Flicking>
      </Link>
    </>
  )
}

export default Carousel
