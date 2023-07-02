"use client"

import Button from '@/app/components/Button'
import useAddNewEventModal from '@/app/hooks/useAddNewEventModal';
import useMutatorSWR from '@/app/hooks/useMutatorSWR';
import React from 'react'
import { BsCalendarEvent } from 'react-icons/bs';

interface AddEventModalBtnProps {
  mutator: any;
}

const AddEventModalBtn:React.FC<AddEventModalBtnProps> = ({
  mutator
}) => {
  const addEventModal = useAddNewEventModal();
  const MutatorSWR = useMutatorSWR();
  return (
    <Button
      icon={BsCalendarEvent}
      iconSize={20}
      label="Add New Event"
      onAction={() => {
        MutatorSWR.setMutator(mutator);
        addEventModal.onOpen();
      }}
    />
  )
}

export default AddEventModalBtn
