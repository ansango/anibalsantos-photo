import { ImArrowUp2 as ARROW } from 'react-icons/im'
import { useEffect, useState } from 'react'
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const role = 'button'
  return (
    <div className="fixed bottom-6 right-10 z-10">
      <button
        className="bg-green-300 hover:bg-green-200 text-green-600 font-bold px-4 py-3 border-b-4 border-green-500 hover:border-blue rounded-md opacity-0 transition-opacity duration-700"
        style={{ opacity: isVisible ? '100' : '0', pointerEvents: !isVisible ? 'none' : 'initial' }}
        onClick={scrollToTop}
        role={role}
      >
        <ARROW />
      </button>
    </div>
  )
}
export default ScrollToTop
