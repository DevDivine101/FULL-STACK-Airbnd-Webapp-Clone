import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface iInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<iInputProps> = ({
  id,
  label,
  // type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative flex items-center">
      {formatPrice && (
        <BiDollar
          size={24}
          classNmae="text-neutral-700
        absolute
        top-5
        left-2"
        />
      )}
      <input
        // type="text"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        className={`      peer
      h-[55px]
      pt-5
      w-full
      font-light
      border-2
      rounded-md
      transition
      outline-none
      disabled:opacity-70
      disabled:cursor-not-allowed
      ${formatPrice ? "pl-9" : "pl-4"}
      ${errors[id] ? "border-rose-500" : "border-netutral-300"}
      ${errors[id] ? "focus:border-rose-500" : "focus:border-[#000]"}
      `}
        placeholder=" "
      />
      <label
        className={`absolute 
     left-0
     flex
     justify-center
     items-center
      z-10
      text-md
      text-sm
    
      duration-150
      transform
      -translate-y-3
      origin-[0]
      ${formatPrice ? "left-9" : "left-4"}
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-75
      peer-focus:-translate-y-4
      
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
