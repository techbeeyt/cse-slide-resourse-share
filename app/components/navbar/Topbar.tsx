"use client";

import React from 'react';
import Avatar from '../Avatar';
import { RiShareBoxLine } from 'react-icons/ri';
import Searchbar from '../searchbar/Searchbar';
import ToggleLeftbar from './ToggleLeftbar';
import useSearchModal from '@/app/hooks/useSearchModal';

const styles = {
  appearance: "bg-primary h-[80px] fixed top-0 left-0 z-10 w-full pl-[110px] pr-4 flex justify-between items-center"
}

const Topbar = () => {
  const searchModal = useSearchModal();
  return (
    <div className={styles.appearance}>
      <div className='flex flex-row justify-start items-center gap-4'>
        <ToggleLeftbar />
        <div>
          <Searchbar
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
          />
        </div>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <RiShareBoxLine />
        <Avatar imageUrl='https://picsum.photos/200/300' />
      </div>
    </div>
  )
}

export default Topbar