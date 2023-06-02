"use client";

import React from 'react'
import ModalContainer from '../container/ModalContainer';
import useAddNewEventModal from '@/app/hooks/useAddNewEventModal';
import axios from 'axios';
import PrimaryContainer from '../container/PrimaryContainer';
import Button from '@/app/components/Button';
import TextArea from '../inputs/TextArea';
import Input from '@/app/components/inputs/Input';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';

const AddNewEventModal = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      date: '',
      time: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    axios.post("/api/events/add", data)
      .then(() => alert("Added new event"))
  }
  const modal = useAddNewEventModal();
  if (!modal.isOpen) return null; 
  return (
    <ModalContainer
      onClose={() => {}}
    >
      <div className='mt-8 flex justify-center items-center'>
        <div className='bg-secondary rounded-3xl p-4 w-[500px]'>
          <PrimaryContainer
            title='Add New Event'
            divider
            largeTitle
            subtitle='Close'
            subtitleClickAction={modal.onClose}
          >
            <div
              className="
                flex
                justify-start
                flex-col
                items-start
                gap-3
              "
            >
              <Input
                id='title'
                inputType='text'
                label="Title"
                register={register}
                errors={errors}
                required
              />
              <TextArea
                id='description'
                errors={errors}
                register={register}
                label='Description'
              />
              <Input
                id='date'
                label='Date'
                inputType='date'
                register={register}
                errors={errors}
                required
              />

              <Input
                id='time'
                label='Time'
                inputType='time'
                register={register}
                errors={errors}
                required
              />

              <Button
                label='Add Event'
                onAction={handleSubmit(onSubmit)}
              />
            </div>
          </PrimaryContainer>
        </div>
      </div>
    </ModalContainer>
  )
}

export default AddNewEventModal
