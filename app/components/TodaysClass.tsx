import React from 'react';

interface TodaysClassProps {
  data?: any;
  color?: string;

}

const TodaysClass: React.FC<TodaysClassProps> = ({
  data,
  color
}) => {
  return (
    <div className='bg-[#a7f3d0] px-4 py-2 rounded-xl flex flex-col justify-start items-center gap-1 max-w-[250px]'>
      <div className='text-black/90 flex justify-center items-center gap-2'>
        <span className='font-bold'>8:50 AM</span>
        <span className='font-bold'>-</span>
        <span className='font-bold'>9:40 PM</span>
      </div>
      <div className='h-px w-full bg-gray-400'></div>
      <div>
        <h2 className='text-neutral-700/90 font-semibold'>CSE 3107 CT</h2>
        <div className='text-neutral-700/90'>Teacher Name: Shyla Afroze</div>
        <div className='text-neutral-700/90'>Room No: 103</div>
      </div>
    </div>
  )
}

export default TodaysClass