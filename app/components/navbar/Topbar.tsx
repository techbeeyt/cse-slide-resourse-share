"use client";

import React from 'react';
import { RiShareBoxLine } from 'react-icons/ri';
import Searchbar from '../searchbar/Searchbar';
import ToggleLeftbar from './ToggleLeftbar';
import useSearchModal from '@/app/hooks/useSearchModal';
import Avatar from '../Avatar';
import { signIn, useSession } from 'next-auth/react';
import ClientOnly from '../ClientOnly';
import Button from '../Button';
import { SiGoogle } from 'react-icons/si';
import { IoMdApps } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const styles = {
  appearance: "bg-primary h-[80px] fixed top-0 left-0 z-10 w-full pl-[110px] pr-4 flex justify-between items-center"
}

interface TopbarProps {
  currentUser?: any
}

const Topbar: React.FC<TopbarProps> = ({
  currentUser
}) => {
  const router = useRouter();
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
      <ClientOnly>
        <div className='flex justify-center items-center gap-4'>
          {
            currentUser?.role === 'ADMIN' ? (
              <Button
                icon={IoMdApps}
                label="Admin Panel"
                iconSize={20}
                onAction={() => router.push('/admin-panel')}
              />
            ) : null
          }
          {
            currentUser ? (
              <Avatar imageUrl={currentUser.image} />
            ) : (
                <Button
                  icon={SiGoogle}
                  label="Sign In"
                  onAction={() => signIn('google')}
                />
              )
          }
        </div>
      </ClientOnly>
    </div>
  )
}

export default Topbar