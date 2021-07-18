import Image from './Image'

const ImageStorie = ({ gallery }) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
      {gallery.map((src, index) => {
        return <Image key={index} src={src} alt="" width={768} height={473} />
      })}
    </div>
  )
}
export default ImageStorie
