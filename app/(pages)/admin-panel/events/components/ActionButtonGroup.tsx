"use client";

import React from 'react';
import { toast } from 'react-hot-toast';

interface ActionButtonGroupProps {
  id: string;
  mutator: any
}

const ActionButtonGroup: React.FC<ActionButtonGroupProps> = ({
  id,
  mutator
}) => {
  const handleDelete = async (id : string) => {
    fetch(`/api/events/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    }).then((response) => {
      return response.json()
    })
    .then((data) => {
      if(data.success) {
        mutator();
        toast.success('Event deleted successfully!');
      } else {
        toast.error('Event deletion failed!');
      }
    })
  }
  return (
    <div className='flex justify-center items-center gap-2'>
      <button className="bg-indigo-600 px-3 py-1.5 border-indigo-700 border rounded text-indigo-100">Edit</button>
      <button className="bg-red-600 px-3 py-1.5 border-red-700 border rounded text-red-100" onClick={() => {handleDelete(id)}}>Delete</button>
    </div>
  )
}

export default ActionButtonGroup
