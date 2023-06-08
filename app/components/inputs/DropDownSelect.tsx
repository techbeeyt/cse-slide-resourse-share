import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type OptionDataType = {
  label: string;
  value: string;
}

interface DropDownSelectProps {
  options: OptionDataType[];
  id: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors
}

const DropDownSelect: React.FC<DropDownSelectProps> = ({
  options,
  id,
  label,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <select className={`
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
      {...register(id, { required })}
      disabled={disabled}
    >
      <option value="">{label}</option>
      {
        options.map((item, index) => {
          return (
            <option key={index} value={item.value}>{item.label}</option>
          )
        })
      }
    </select>
  )
}

export default DropDownSelect;
