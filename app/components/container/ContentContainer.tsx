"use client"
import React from 'react';
import UpcomingEvent from '../UpcomingEvent';
import TodaysClass from '../TodaysClass';

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
  let contents = (<div>Some data</div>);  
  return (
    <div className='flex flex-col justify-start items-start gap-2'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='text-lg font-semibold text-white/90'>{title}</h1>
        <button
          onClick={action}
          className='text-sky-400'
        >
          {actionLabel}
        </button>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ContentContainer