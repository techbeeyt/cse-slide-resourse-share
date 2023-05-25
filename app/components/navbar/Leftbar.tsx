"use client";
import React, { MouseEventHandler } from 'react';
import LeftbarButton from './leftbar/LeftbarButton';
import { GoHome } from 'react-icons/go';
import { HiOutlineStar } from 'react-icons/hi';
import { FcMindMap, FcPuzzle } from 'react-icons/fc';
import { TbSettings2 } from 'react-icons/tb';
import { RiShutDownLine } from 'react-icons/ri';
import { BsFolder } from 'react-icons/bs';
import useLeftbar from '@/app/hooks/useLeftBar';
import LeftbarOverlay from './leftbar/LeftbarOverlay';
import Link from 'next/link';

const styles = {
  appearance: "bg-primary fixed left-0 top-0"
}

const Leftbar = () => {
  const leftbar = useLeftbar();

  return (
    <LeftbarOverlay
      onClose={leftbar.onClose}
      isOpen={leftbar.isOpen}
    >
      <div className={`
        bg-primary
        fixed
        left-0
        top-0
        h-screen
        ${leftbar.isOpen ? 'w-[200px]' : 'w-[90px]'}
        flex
        flex-col
        justify-start
        gap-[80px]
        items-start
        ${leftbar.isOpen ? '' : ''}
        ${leftbar.isOpen ? 'shadow-xl' : ''}
        z-20
        transition-all
        duration-300
        ease-in
      `}>
        <div 
          className={`
            mt-6
            transition-all
            duration-200
            ${leftbar.isOpen ? "translate-x-[30px]" : "translate-x-[20px]"}
            flex flex-row justify-start items-center
            cursor-pointer
          `}>
          <FcMindMap size={30} />

          <span className={`
            absolute
            transition-all
            duration-300
            ease-in
            overflow-hidden
            ${leftbar.isOpen ? "opacity-100" : "opacity-0"}
            ${leftbar.isOpen ? "pl-10" : "pl-3"}
            whitespace-nowrap
            font-semibold
            text-xl
          `}>CSE 19 B</span>
        </div>

        <ul className={`
          flex flex-col justify-start  gap-8
          ${leftbar.isOpen ? "items-start" : "items-center"}
          translate-x-1/4
        `}>
          <li>
            <Link href="/">
              <LeftbarButton
                size={23}
                title='Home'
                onClick={() => {}}
                icon={GoHome}
                isOpen={leftbar.isOpen}
              />
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <LeftbarButton
                size={24}
                title='Resources'
                onClick={() => {}}
                icon={BsFolder}
                isOpen={leftbar.isOpen}
              />
            </Link>
          </li>
          <li>
            <LeftbarButton
              size={24}
              title='Favourites'
              onClick={() => {}}
              icon={HiOutlineStar}
              isOpen={leftbar.isOpen}
            />
          </li>
          <li>
            <LeftbarButton
              size={20}
              title='Settings'
              onClick={() => {}}
              icon={TbSettings2}
              isOpen={leftbar.isOpen}
            />
          </li>
          <li>
            <LeftbarButton
              size={20}
              title='Logout'
              onClick={() => {}}
              icon={RiShutDownLine}
              isOpen={leftbar.isOpen}
            />
          </li>
        </ul>
      </div>
    </LeftbarOverlay>
  )
}

export default Leftbar