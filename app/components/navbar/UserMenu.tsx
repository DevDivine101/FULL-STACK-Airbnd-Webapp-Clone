"use clinet";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import Menuitem from "./Menuitem";
import useRegisterModal from "../hooks/useRegisterModel";
import useLoginModal from "../hooks/useLoginModal";
// import RegisterModal2 from '../Modals/RegisterModal2'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div>
      <div className="relative">
        <div
          className=" flex flex-row
            items-center
            gap-3"
        >
          <div
            onClick={() => {}}
            className="hidden
                md:block
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer"
          >
            Airbnb your home
          </div>
          <div
            onClick={toggleOpen}
            className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition"
          >
            <AiOutlineMenu size={20} />
            <div
              className="hidden
md:block"
            >
              <Avatar />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[30%]
            md:w-sm
            bg-[#ffff]
            ovrflow-hidden
            right-0
            top-[87px]
            text-sm"
        >
          <div
            className="flex 
                flex-col
                cursor-pointer"
          >
            <>
              <Menuitem onClick={loginModal.onOpen} label="LogIn" />
              <Menuitem onClick={registerModal.onOpen} label="Register" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
