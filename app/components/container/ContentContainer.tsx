"use client"
import React from 'react';

interface ContentContainerProps {
  title: string;
  actionLabel?: string;
  action?: () => void;
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  title,
  actionLabel,
  action,
  children
}) => {
  return (
    <div className='flex flex-col justify-start items-start gap-2 w-full'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='text-lg font-semibold text-white/90'>{title}</h1>
        <button
          onClick={action}
          className='text-sky-400'
        >
          {actionLabel}
        </button>
      </div>
      <div className='w-full overflow-hidden'>
        {children}
      </div>
    </div>
  )
}

export default ContentContainer