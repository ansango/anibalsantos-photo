import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import Image from '@/components/Image'
import Link from '@/components/Link'

const Carousel = ({ data }) => {
  const { slug, images } = data

  return (
    <>
      <Link key={slug} href={`/stories/${slug}`} className="pt-20 pb-10 hidden lg:block">
        <Flicking align="prev" interruptable={false}>
          {images.map((panel, index) => (
            <div key={index} className="mx-4">
              <Image className="rounded-md" alt="" src={panel} width={700} height={480} />
            </div>
          ))}
        </Flicking>
      </Link>
    </>
  )
}

export default Carousel
