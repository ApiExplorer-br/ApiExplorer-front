import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { List, X } from 'phosphor-react';
import InputSearch from './InputSearch';
import MenuDropdownCategories from './MenuDropdownCategories';
import MenuDropdownLogin from './MenuDropdownLogin';
import ToggleDarkMode from './ToggleDarkMode';

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        onClick={openModal}
        title="Abrir menu mobile"
        className="lg:hidden"
      >
        <List weight="bold" size={25} className="text-light-secondary" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="absolute z-10 top-0 right-0 w-80 h-screen max-w-[calc(100%-3rem)]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
          </Transition.Child>
          <div className="h-full">
            <div className="h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-x-6"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-6"
              >
                <Dialog.Panel className="h-full p-4 transform overflow-hidden bg-light-primary dark:bg-dark-primary text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="relative flex gap-5 items-center justify-between"
                  >
                    <button
                      type="button"
                      onClick={closeModal}
                      title="Fechar menu mobile"
                    >
                      <X weight="bold" size={25} className="text-light-secondary" />
                    </button>
                    <InputSearch />
                  </Dialog.Title>
                  <div className="-mt-20 h-full flex flex-col items-center justify-center gap-20">
                    <a href="/" className="cursor-pointer text-light-text dark:text-dark-text hover:text-light-secondary transition-all">Home</a>
                    <MenuDropdownCategories />
                    <div className="flex gap-4 items-center">
                      <MenuDropdownLogin />
                      <ToggleDarkMode />
                    </div>
                  </div>
                </Dialog.Panel>

              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
