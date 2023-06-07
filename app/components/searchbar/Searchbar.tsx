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
        p-0
        md:p-1
        relative
        border
        w-8
        h-8
        md:h-auto
        md:w-[200px]
        border-transparent
        md:border-gray-400
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
      <div className='bg-transparent w-full p-1 pl-2 focus:outline-none border-l focus:border-gray-600 border-transparent hidden md:block'>
        Search
      </div>
    </div>
  )
}

export default Searchbar