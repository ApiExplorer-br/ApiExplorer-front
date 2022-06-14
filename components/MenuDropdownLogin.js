import { UserCircle, CaretDown } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { AiFillGithub } from "react-icons/ai";

function MenuDropdownLogin() {
  return (
    <Popover className="relative text-base">
      <Popover.Button className="flex items-center gap-1 focus:outline-none hover:text-light-secondary">
        <UserCircle size={30} weight="light" />
        Login
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col justify-center items-center w-56 h-40 space-y-2 bg-light-primary dark:bg-dark-primary left-0 top-9 rounded-md p-4 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <p className="text-center">Faça o login com o github</p>
          <a
            className="p-2 flex gap-2 justify-center items-center rounded-md border-transparent w-full border-2 text-[#6772E5] border-[#6772E5] hover:bg-[#6772E5] hover:text-dark-text"
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          >
            <AiFillGithub size={20} />
            GITHUB
          </a>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default MenuDropdownLogin;
