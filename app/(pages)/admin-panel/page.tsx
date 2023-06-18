import Icon from '@/app/components/Icon';
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import Link from 'next/link';
import React from 'react';
import { BiBell, BiUser } from 'react-icons/bi';
import { BsCalendarEvent, BsCalendarWeek } from 'react-icons/bs';

const AdminPanel = () => {
  return (
    <div className="">
      <div className="pr-4">
        <PrimaryContainer
          title='Manage Website'
          divider
        >
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-4 text-indigo-200 mt-4">
            <Link href="/admin-panel/events" className="bg-gradient-to-tr from-indigo-600 to-indigo-500 py-4 md:py-6 flex flex-col gap-1 items-center justify-center rounded-md">
              <Icon name={BsCalendarEvent} responsiveClass='text-xl md:text-3xl' />
              <div>Events</div>
            </Link>

            <Link href="/admin-panel/routines" className="bg-gradient-to-tr from-indigo-600 to-indigo-500 py-4 md:py-6 flex flex-col gap-1 items-center justify-center rounded-md">
              <Icon name={BsCalendarWeek} responsiveClass='text-xl md:text-3xl' />
              <div>Routines</div>
            </Link>

            <Link href="/admin-panel/notices" className="bg-gradient-to-tr from-indigo-600 to-indigo-500 py-4 md:py-6 flex flex-col gap-1 items-center justify-center rounded-md">
              <Icon name={BiBell} responsiveClass='text-2xl md:text-3xl' />
              <div>Notices</div>
            </Link>
            
            <Link href="/admin-panel/users" className="bg-gradient-to-tr from-indigo-600 to-indigo-500 py-4 md:py-6 flex flex-col gap-1 items-center justify-center rounded-md">
              <Icon name={BiUser} responsiveClass='text-2xl md:text-3xl' />
              <div>Users</div>
            </Link>
          </div>
        </PrimaryContainer>
      </div>
    </div>
  )
}

export default AdminPanel;
