"use client";

import Button from '@/app/components/Button';
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import useAddNewEventModal from '@/app/hooks/useAddNewEventModal';
import React from 'react';
import { BsCalendarEvent, BsCalendarWeek } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';

const AdminPanel = () => {
  const addEventModal = useAddNewEventModal();

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
          onAction={() => alert("Hello")}
        />
      </div>
      <div className="pr-4">
        <PrimaryContainer
          title='Manage Events'
          divider
        >
          Hello World
        </PrimaryContainer>
      </div>
    </div>
  )
}

export default AdminPanel;
