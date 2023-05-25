"use client"

import useLeftbar from '@/app/hooks/useLeftBar';
import React from 'react';
import { IoMdMenu } from 'react-icons/io';


const ToggleLeftbar = () => {
  const leftBar = useLeftbar();
  return (
    <div
      onClick={leftBar.onOpen}
    >
      <IoMdMenu size={26} />
    </div>
  )
}

export default ToggleLeftbar