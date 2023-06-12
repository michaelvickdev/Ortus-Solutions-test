import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';

type BookingModalProps = {

  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [value, setValue] = useState(1);

  const [showDatePicker, setShowDatePicker] = useState(false);
	const handleChangeDatePicker = (selectedDate: Date) => {
		console.log(selectedDate)
	}

	const handleSetDatePicker = (state: boolean) => {
		setShowDatePicker(state)
	}

  function closeModal() {
    onClose();
  }

  const price = 75;
  const total = value * price;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform rounded-lg bg-gray-50 p-4 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-600"
                >
                  Canyoneering Package
                </Dialog.Title>
                <div className="mt-12 text-xs text-gray-500 flex flex-col items-end px-10">
                  <div>
                    <div className='flex items-center'>
                      <p>How many members in party?:</p>
                      <input
                        value={value || ''}
                        onChange={(e) => setValue(Number(e.target.value || 0))}
                        type="number"
                        className='w-14 text-right px-2 py-1 border border-gray-200 ml-5 mr-2 rounded-sm'
                      />
                      <p className='mr-2'>x</p>
                      <p className='text-base'>${price}</p>
                    </div>
                    <div className='mt-4 flex items-center'>
                      <p className='whitespace-nowrap mr-5'>Choose a date:</p>
                      <Datepicker
                        onChange={handleChangeDatePicker}
                        show={showDatePicker}
                        setShow={handleSetDatePicker}
                        options={{
                          theme: {
                            input: 'text-xs w-[140px] bg-white rounded-sm text-gray-700 border-gray-200'
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className='flex justify-end items-center mt-6'>
                    <p className='text-xs font-semibold mr-2'>TOTAL</p>
                    <p className='text-lg font-bold'>${total.toFixed(2)}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="text-white bg-green-700 px-6 py-2 mt-6 text-sm hover:bg-green-800"
                    onClick={closeModal}
                  >
                    NEXT
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
