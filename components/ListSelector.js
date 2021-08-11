import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon } from './icons'
import { useRouter } from 'next/router'

const ListSelector = ({
  data,
  label = 'Select an option',
  title = '',
  emoji = null,
  counter = 0,
  onLocationSelected,
  route = '/',
}) => {
  const raw = data.map((item, index) => {
    return {
      id: index + 1,
      name: item,
      unavailable: false,
    }
  })

  raw.unshift({ id: 0, name: label, unavailable: true })

  const [selected, setSelected] = useState(raw[0])
  const router = useRouter()
  const handleChange = (option) => {
    setSelected(option)
    onLocationSelected(option.name)
    router.push(route)
  }

  return (
    <div>
      <h3 className="font-bold py-2">
        <span className="mr-1">{emoji}</span>
        {title} - {counter}
      </h3>
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative border-2 border-dashed border-primary-400 rounded-lg">
          <Listbox.Button className="hover:bg-primary-100 dark:hover:bg-primary-900 rounded-lg p-4 text-left w-full flex justify-between items-center">
            <span className="block truncate font-semibold">{selected.name}</span>
            <SelectorIcon size={20} className="text-primary-600" />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="mt-2 w-full text-left absolute z-10 overflow-auto bg-white dark:bg-gray-900 border-2 border-primary-400 rounded-lg shadow-lg max-h-60">
              {raw.map((item, index) => {
                const unavailable = item.unavailable
                return (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `${
                        active
                          ? 'text-primary-900 dark:text-primary-700 bg-primary-100 dark:bg-primary-900 cursor-pointer font-semibold'
                          : 'text-gray-900 dark:text-primary-100'
                      }
                          px-4 py-1`
                    }
                    value={item}
                    disabled={item.unavailable}
                  >
                    <span
                      className={
                        unavailable ? 'text-gray-400' : 'text-gray-900 dark:text-primary-200'
                      }
                    >
                      {item.name}
                    </span>
                  </Listbox.Option>
                )
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
export default ListSelector
