import { useEffect, useState } from 'react'
import { CookieIcon } from './icons'

function useLocalStorage(defaultValue, key) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key)

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue))
    }
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

const Policy = () => {
  const [policyAccepted, setPolicyAccepted] = useLocalStorage(false, 'cookiesPolicy')
  const handlerAccept = () => {
    setPolicyAccepted(true)
  }
  return !policyAccepted ? (
    <div className="max-w-3xl mx-auto xl:max-w-5xl">
      <div className="fixed bottom-0 md:bottom-4 max-w-3xl mx-auto xl:max-w-5xl">
        <div className="rounded-md bg-primary-100 dark:bg-gray-700 p-5 md:flex md:justify-between">
          <div className="flex py-4 md:py-2">
            <div className="flex items-center px-4">
              <CookieIcon size={40} className="text-primary-500 dark:text-primary-400" />
            </div>
            <p className="md:pr-4">
              I use cookies to improve my content. By continuing to use this site, you agree to my
              use of cookies.
            </p>
          </div>
          <div className="w-full md:w-1/5 md:flex md:flex-col md:items-center md:justify-center">
            <button
              onClick={handlerAccept}
              className="rounded-md bg-primary-300 hover:bg-primary-200 text-primary-600 font-bold px-3 py-2 border-b-4 border-primary-500 w-full"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}
export default Policy
