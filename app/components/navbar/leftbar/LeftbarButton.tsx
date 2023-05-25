import React from 'react';
import { IconType } from 'react-icons';

interface LeftbarButtonProps {
  size?: number;
  title: string;
  onClick: () => void;
  icon: IconType;
  isOpen?: boolean;
}
 
const LeftbarButton: React.FC<LeftbarButtonProps> = ({
  size,
  title,
  onClick,
  icon: Icon,
  isOpen
}) => {
  return (
    <div className={`
        text-white 
        flex 
        cursor-pointer
        justify-center
        items-center
        gap-[6px]
        px-2
        w-full
      `}
    >
      <div className={`
        w-10 h-10
        rounded-full
        flex items-center justify-center
        hover:bg-sky-200/30
      `}>
        <Icon size={size} />
      </div>

      <span className={`
        absolute
        transition-all
        duration-300
        ease-in
        overflow-hidden
        ${isOpen ? "opacity-100" : "opacity-0"}
        ${isOpen ? "scale-100" : "scale-0"}
        ${isOpen ? "translate-x-1/2" : "translate-x-0"}
        ${isOpen ? "pl-6" : "pl-0"}
      `}>{title}</span>
    </div>
  )
}

export default LeftbarButton;