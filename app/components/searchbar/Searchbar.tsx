"use client";

import useSearchModal from '@/app/hooks/useSearchModal';
import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import SearchModal from './SearchModal';


interface SearchbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  isOpen,
  onClose
}) => {
  const searchModal = useSearchModal();
  return (
    <div
      className={`
        bg-secondary
        flex
        justify-start
        items-center
        rounded-full
        group
        p-1
        relative
        border
        w-[200px]
        border-gray-400
        transition
        duration-150
      `}
      onClick={() => {
        searchModal.onOpen();
      }}
    >
      <div className='pl-2 pr-1 text-white/80 group-hover:text-white'>
        <BiSearchAlt2 size={20} />
      </div>
      <input type="text" className='bg-transparent w-full p-1 pl-2 focus:outline-none border-l focus:border-gray-600 border-transparent' placeholder='Search' />
    </div>
  )
}

export default Searchbar