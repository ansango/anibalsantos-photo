import { Disclosure } from '@headlessui/react'
const Accordion = ({ data, title = '' }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border-2 border-dashed border-primary-400 rounded-lg p-4 flex flex-col">
          <Disclosure.Button className="hover:bg-primary-100 rounded-lg p-1 text-left">
            <h3 className="font-bold text-xl">{title}</h3>
          </Disclosure.Button>
          <Disclosure.Panel>
            <ul className="flex flex-col">
              {data.map((item, index) => (
                <button key={index} className="hover:bg-primary-100 rounded-lg p-1 text-left">
                  <li>{item}</li>
                </button>
              ))}
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
export default Accordion
