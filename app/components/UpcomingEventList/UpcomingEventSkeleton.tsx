import React from 'react';

const UpcomingEventSkeleton = () => {
  return (
    <div className={`bg-gray-600 px-4 py-2 rounded-xl flex justify-start items-center gap-1 animate-pulse`}>
      <div className='flex flex-col justify-center items-center gap-1'>
        <span className='h-10 w-10 rounded bg-gray-400'></span>
        <span className='h-5 w-10 rounded-full bg-gray-400/90'></span>
      </div>
      <div className='h-12 w-px bg-gray-400 mx-2'></div>
      <div className="flex flex-col justify-start items-start gap-1">
        <h2 className='h-7 w-24 rounded-full bg-gray-400'></h2>
        <div className='h-5 w-48 rounded-full bg-gray-400'></div>
        <div className='h-5 w-24 rounded-full bg-gray-400'></div>
        <div className='h-6 w-20 rounded-full bg-gray-400'></div>
      </div>
    </div>
  )
}

export default UpcomingEventSkeleton;