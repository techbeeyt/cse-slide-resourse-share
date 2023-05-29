import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onAction?: () => void;
  icon?: IconType;
  btnType?: "primary" | "secondary" | string;
  iconColor?: string;
  iconSize?: number
}

const Button: React.FC<ButtonProps> = ({
  label,
  onAction,
  icon: Icon,
  btnType = "primary",
  iconColor,
  iconSize
}) => {
  return (
    <button
      onClick={onAction}
      className={`
        text-white
        px-4 
        py-2 
        rounded-md
        flex justify-center items-center gap-2
        outline outline-2 outline-indigo-500
        ${btnType === "primary" ? "bg-indigo-500" : "bg-transparent"}
        ${btnType === "primary" ? "text-white" : "text-indigo-100"}
        ${btnType === "primary" ? "hover:bg-indigo-700/30" : "hover:outline-[3px]"}
        ${btnType === "primary" ? "hover:backdrop-blur-md" : "hover:outline-[3px]"}
      `}
    > 
      <div className={iconColor}>
        {Icon ? <Icon size={iconSize} /> : null}
      </div>
      {label}
    </button>
  )
}

export default Button
