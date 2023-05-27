import React from 'react';

interface UpcomingEventProps {
  data: any;
  color?: string;

}

const UpcomingEvent = () => {
  return (
    <div className='bg-[#fee4cb] px-4 py-2 rounded-xl flex justify-start items-center gap-2 max-w-[350px]'>
      <div className='text-black/90 flex flex-col justify-center items-center gap-0'>
        <span className='text-lg font-bold'>16</span>
        <span>June</span>
      </div>
      <div className='h-12 w-px bg-gray-400 mx-2'></div>
      <div>
        <h2 className='text-neutral-700/90 font-semibold'>CSE 3107 CT</h2>
        <div className='text-neutral-700/90'>{"Description: Chap2, chap3, chap4, yusdgf, hubieruwg f, earsuighfb".slice(0, 50)}</div>
        <div className='text-red-900 font-semibold'>3 days to go</div>
      </div>
    </div>
  )
}

export default UpcomingEvent