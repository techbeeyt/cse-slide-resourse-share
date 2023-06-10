"use client";

import useSearchModal from '@/app/hooks/useSearchModal';
import React, { MouseEventHandler } from 'react'
import ModalContainer from '../container/ModalContainer';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchModal = () => {
  const searchModal = useSearchModal();
  if(!searchModal.isOpen) return null;

  const handleEventDelegation: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("e.target");
    console.log(e.target);
    console.log("e.currentTarget");
    console.log(e.currentTarget);
    if(e.target === e.currentTarget) {
      searchModal.onClose();
    }
  }
  return (
    <ModalContainer
      onClose={handleEventDelegation}
    >
      <div id="modal" className='fixed' style={{
        top: '18px',
        left: "146px"
      }}>
        <div
          className={`
            bg-secondary
            flex
            justify-start
            items-center
            rounded-t-3xl
            group
            p-1
            relative
            border
            border-t-gray-400
            border-x-gray-500
            w-[500px]
            border-gray-400
            transition
            duration-150
          `}
          onClick={searchModal.onOpen}
        >
          <div className='pl-2 pr-1 text-white/80 group-hover:text-white'>
            <BiSearchAlt2 size={20} />
          </div>
          <input type="text" className='bg-transparent w-full p-1 pl-2 focus:outline-none border-l focus:border-gray-600 border-transparent' placeholder='Search' />
        </div>
        <div className='bg-secondary h-32 w-[500px] p-2 border border-b-gray-500 border-x-gray-500 border-t-transparent rounded-b-3xl border-t-gray-600'>
          <div className='p-2 flex justify-between items-center'>
            <div className='text-lg font-semibold'>
              Suggestions..
            </div>
            <div 
              onClick={handleEventDelegation}
              className='cursor-pointer text-sky-200'
            >
              close
            </div>
          </div>
          <div className='px-2'>
            <div>
              Cse Iuighdw ujiysdgbf uay
            </div>

            <div>
              Cse Iuighdw ujiysdgbf uay
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

export default SearchModal