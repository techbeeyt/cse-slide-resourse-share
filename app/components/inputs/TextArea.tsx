import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface TextAreaProps {
  id: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div
      className={`
        w-full
        relative
        mt-4
      `}
    >
      <textarea
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
          ${errors[id] ? "border-rose-600" : "border-neutral-700/0"}
          focus:bg-gray-500/50
          focus:backdrop-blur-md
        `}
        placeholder=" "
        rows={4}
        required={required}
      ></textarea>
      <div
        className={`
          absolute
          -top-6
          left-0
          font-semibold
          scale-75
          peer-placeholder-shown:top-2
          peer-placeholder-shown:left-3
          peer-placeholder-shown:scale-100
          peer-focus:-top-6
          peer-focus:left-0
          peer-focus:scale-75
          transition-all
          duration-100
          ${errors[id] ? "text-rose-600" : "text-white/50"}
          ease-out
        `}
      >
        {label}
      </div>
    </div>
  )
}

export default TextArea
