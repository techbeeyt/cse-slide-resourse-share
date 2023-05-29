"use client";

import useLeftbar from '@/app/hooks/useLeftBar';
import React, { MouseEventHandler } from 'react';

interface LeftbarOverlayProps {
  children: React.ReactNode;
  onClose?: () => void;
  isOpen: boolean;
}

const LeftbarOverlay: React.FC<LeftbarOverlayProps> = ({
  children,
  onClose,
  isOpen
}) => {
  const leftbar = useLeftbar();
  const handleCLick: MouseEventHandler<HTMLDivElement> = (event) => {
    if(event.target === event.currentTarget) {
      return leftbar.onClose();
    }
  }
  return (
    <div
      id='leftbar_overlay'
      onClick={handleCLick}
      className={`
        fixed 
        inset-0 
        bg-black/50 
        sm:bg-transparent 
        z-40
        ${isOpen ? "w-full" : "w-[90px]"}
      `}
    >
      {children}
    </div>
  )
}

export default LeftbarOverlay