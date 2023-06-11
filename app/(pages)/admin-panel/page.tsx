"use client";

import Button from '@/app/components/Button';
import Icon from '@/app/components/Icon';
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import useAddNewEventModal from '@/app/hooks/useAddNewEventModal';
import useAddNewRoutineModal from '@/app/hooks/useAddNewRoutineModal';
import React from 'react';
import { BiBell, BiUser } from 'react-icons/bi';
import { BsCalendarEvent, BsCalendarWeek } from 'react-icons/bs';

const AdminPanel = () => {
  const addEventModal = useAddNewEventModal();
  const addRoutineModal = useAddNewRoutineModal();
  return (
    <div className="">
      <div className="p-4 flex justify-end items-center gap-3">
        <Button
          icon={BsCalendarEvent}
          iconSize={20}
          label="Add New Event"
          onAction={() => addEventModal.onOpen()}
        />

        <Button
          icon={BsCalendarWeek}
          iconSize={20}
          label="Add New Routine"
          onAction={() => addRoutineModal.onOpen()}
        />
      </div>
      <div className="pr-4">
        <PrimaryContainer
          title='Manage Website'
          divider
        >
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-4 text-indigo-200 mt-4">
            <div className="bg-gradient-to-tr from-indigo-600 to-indigo-500 py-4 md:py-6 flex flex-col gap-1 items-center justify-center rounded-md">
              <Icon name={BsCalendarEvent} responsiveClass='text-xl md:text-3xl' />
              <div>Events</div>
            </div>

            <div className="bg-gradient-to-tr from-indigo-600 to-indigo-500 py-4 md:py-6 flex flex-col gap-1 items-center justify-center rounded-md">
              <Icon name={BsCalendarWeek} responsiveClass='text-xl md:text-3xl' />
              <div>Routines</div>
            </div>

            <div className="bg-gradient-to-tr from-indigo-600 to-indigo-500 py-4 md:py-6 flex flex-col gap-1 items-center justify-center rounded-md">
              <Icon name={BiBell} responsiveClass='text-2xl md:text-3xl' />
              <div>Notices</div>
            </div>
            
            <div className="bg-gradient-to-tr from-indigo-600 to-indigo-500 py-4 md:py-6 flex flex-col gap-1 items-center justify-center rounded-md">
              <Icon name={BiUser} responsiveClass='text-2xl md:text-3xl' />
              <div>Users</div>
            </div>
          </div>
        </PrimaryContainer>
      </div>
    </div>
  )
}

export default AdminPanel;
