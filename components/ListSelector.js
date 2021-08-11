import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const ListSelector = ({ data, title = '' }) => {
  const raw = data.map((item, index) => {
    return {
      id: index + 1,
      name: item,
      unavailable: false,
    }
  })

  raw.unshift({ id: 0, name: title, unavailable: true })

  const [selected, setSelected] = useState(raw[0])

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative border-2 border-dashed border-primary-400 rounded-lg">
          <Listbox.Button className="hover:bg-primary-100 rounded-lg p-4 text-left w-full">
            <span className="block truncate">{selected.name}</span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="mt-2 w-full text-left absolute z-10 overflow-auto bg-white border-2 border-primary-400 rounded-lg shadow-lg max-h-60">
              {raw.map((item, index) => {
                const unavailable = item.unavailable
                return (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `${active ? 'text-primary-900 bg-primary-100' : 'text-gray-900'}
                          px-4 py-1`
                    }
                    value={item}
                    disabled={item.unavailable}
                  >
                    <span
                      className={unavailable ? 'text-gray-400' : 'text-gray-900 cursor-pointer'}
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
