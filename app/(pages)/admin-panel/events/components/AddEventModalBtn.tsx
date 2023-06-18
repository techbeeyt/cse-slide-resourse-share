"use client"

import Button from '@/app/components/Button'
import useAddNewEventModal from '@/app/hooks/useAddNewEventModal'
import React from 'react'
import { BsCalendarEvent } from 'react-icons/bs'

const AddEventModalBtn = () => {
  const addEventModal = useAddNewEventModal();
  return (
    <Button
      icon={BsCalendarEvent}
      iconSize={20}
      label="Add New Event"
      onAction={addEventModal.onOpen}
    />
  )
}

export default AddEventModalBtn
