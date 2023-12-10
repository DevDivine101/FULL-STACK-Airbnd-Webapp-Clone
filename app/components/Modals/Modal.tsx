// 'use clinet'

// import { useCallback, useEffect, useState } from "react";

// // import  { useCallback, useEffect, useState } from 'react'

// interface ModalProps{
//   isOpen?: any;
//   onClose: () => void;
//   onSumbit: () => void;
//   title?: String;
//   body?: React.ReactElement;
//   footer?: React.ReactElement;
//   actionLabel: string;
//   disabled?: boolean;
//   secondaryAction?: () => void;
//   secondaryLabel: String;
// }
// const Modal: React.FC<ModalProps> = ({
//   isOpen,
//   onClose,
//   onSumbit,
//   title,
//   body,
//   footer,
//   actionLabel,
//   disabled,
//   secondaryAction,
//   secondaryLabel,
// }) => {
//   const [showModal, SetShowModal]:any = useState(isOpen)
//   useEffect(()=>{
//     SetShowModal(isOpen)
//   }, [isOpen])
//   const handleClose =  useCallback(()=>{
//     if(disabled){
//       return
//     }
//     SetShowModal(false);
//     setTimeout(()=>{
//       onClose();
//     }, 300)
//   }, [disabled, onClose]);
//   return (
//     <div>

//     </div>
//   )
// }

// export default Modal

"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSumbit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSumbit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSumbit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSumbit();
  }, [disabled, onSumbit]);

  const handlesecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
justify-center
items-center
flex
overflow-x-hidden
overflow-y-auto
fixed
inset-0
z-50
outline-none
focus:outline-none
bg-neutral-800/70"
      >
        <div
          className="
relative
w-full
md:w-4/6
lg:w-3/6
xl:w-2/5
my-6
mx-auto
h-full
lg:h-auto
md:h-auto
"
        >
          {/* Content */}
          <div
            className={`translate
duration-300
h-full
${showModal ? "translate-y-0" : "translate-y-full"}
${showModal ? "opacity-100" : "opacity-0"}
`}
          >
            <div
              className="
translate
h-full
lg:h-auto
md:h-auto
border-0
rounded-lg
shadow-lg
relative
flex
flex-col
w-full
bg-[#fff]
outline-none
focus:outline-none
"
            >
              {/* Header */}
              <div
                className="
flex
items-center
p-3
rounded-t
justify-center
relative
border-b-[1px]
"
              >
                <button
                  className="p-1
  border-0
  hover:opacity-70
  transition
  absolute
  left-9"
                  onClick={handleClose}
                >
                  <IoMdClose />
                </button>
                <div
                  className="text-lg
  font-semilbold"
                >
                  {title}
                </div>
              </div>
              {/* Body */}
              <div
                className="flex-auto
relative
p-4
"
              >
                {body}
              </div>
              {/* Footer */}
              <div
                className="
flex
flex-col
gap-3
p-4"
              >
                <div
                  className="
flex

items-center
gap-3
w-full
flex-col"
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outLine
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handlesecondaryAction}
                    />
                  )}

                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSumbit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
