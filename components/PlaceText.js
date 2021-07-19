import kebabCase from '@/lib/utils/kebabCase'

const PlaceText = ({ text }) => {
  return (
    <span className="mr-3 text-sm font-medium italic capitalice text-gray-500">
      {text}
      <span role="img" aria-label="">
        📍
      </span>
    </span>
  )
}

export default PlaceText
