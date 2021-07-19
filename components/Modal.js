import Image from './Image'

const Modal = ({ onClose, onImg }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-5">
        <div className="w-auto my-6 mx-auto max-w-7xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-900 outline-none focus:outline-none">
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <Image
                className="cursor-pointer"
                src={onImg}
                alt=""
                width={1232}
                height={770}
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal
