import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  id: string;
  label?: string;
  disabled?: boolean;
  inputType?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  disabled,
  inputType = 'text',
  required,
  register,
  errors
}) => {
  return (
    <div
      className={`
        w-full
        relative
        mt-4
      `}
    >
      <input 
        type={inputType}
        {...register(id, { required })}
        disabled={disabled}
        className={`
          peer
          w-full
          bg-gray-700/30
          rounded-md
          px-4 py-2
          outline-none
          border-2
          text-white
          placeholder-white/50
          placeholder-opacity-50
          focus:placeholder-opacity-30
          focus:placeholder-white/70
          focus:bg-gray-500/50
          ${errors[id] ? "border-rose-600" : "border-neutral-700/0"}
          focus:backdrop-blur-md
        `}
        placeholder=" "
        required={required}

      />
      <label
        className={`
          ${errors[id] ? "text-rose-600" : "text-white/50"}
          absolute
          -top-6
          left-[5px]
          scale-75
          font-semibold
          peer-placeholder-shown:top-2
          peer-placeholder-shown:left-3
          peer-placeholder-shown:scale-100
          peer-focus:-top-6
          peer-focus:left-[5px]
          peer-focus:scale-75
          transition-all
          duration-100
          ease-out
          pointer-events-none
        `}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
