"use client";

import React from 'react'
import ModalContainer from '../container/ModalContainer';
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
import useAddNewRoutineModal from '../../hooks/useAddNewRoutineModal';
import DropDownSelect from '../inputs/DropDownSelect';

const AddNewRoutineModal = () => {
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
      .then(() => alert("Added new routine"))
  }
  const modal = useAddNewRoutineModal();
  if (!modal.isOpen) return null; 

  const WeekDays = [
    {
      label: "Saturday",
      value: "6"
    },
    {
      label: "Sunday",
      value: "0"
    },
    {
      label: "Monday",
      value: "1"
    },
    {
      label: "Tuesday",
      value: "2"
    },
    {
      label: "Wednesday",
      value: "3"
    }
  ]
  return (
    <ModalContainer
      onClose={() => {}}
    >
      <div className='mt-8 flex justify-center items-center'>
        <div className='bg-secondary rounded-3xl p-4 w-[500px]'>
          <PrimaryContainer
            title='Add New Routine'
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
                id='course_title'
                inputType='text'
                label="Course Name/Title"
                register={register}
                errors={errors}
                required
              />

              <Input
                id='start_time'
                label='Start Time'
                inputType='time'
                register={register}
                errors={errors}
                required
              />
              <Input
                id='end_time'
                label='End Time'
                inputType='time'
                register={register}
                errors={errors}
                required
              />

              <DropDownSelect options={WeekDays} />

              <Input
                id='teacher_name'
                inputType='text'
                label="Teacher's Name"
                register={register}
                errors={errors}
                required
              />

              <Input
                id='room_no'
                inputType='text'
                label="Room No"
                register={register}
                errors={errors}
                required
              />

              <Button
                label='Add Routine'
                onAction={handleSubmit(onSubmit)}
              />
            </div>
          </PrimaryContainer>
        </div>
      </div>
    </ModalContainer>
  )
}

export default AddNewRoutineModal;
