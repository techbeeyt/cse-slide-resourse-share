import moment from 'moment';
import { Poppins } from 'next/font/google';
import React from 'react';

interface TodaysClassProps {
  data: any;
  index: number;

}

const poppins = Poppins({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const TodaysClass: React.FC<TodaysClassProps> = ({
  data,
  index
}) => {
  const colors = [ "bg-[#a7f3d0]", "bg-[#ECACD8]", "bg-[#C8ACEC]", "bg-[#51e4cb]", "bg-[#ECBEAC]", "bg-[#A4CDDC]", "bg-[A4DCB1]" ]
  return (
    <div className={`
      bg-gradient-to-bl from-slate-500 to-slate-600

      px-4 py-2 
      rounded-xl 
      flex flex-col justify-start items-center 
      gap-px md:gap-1 w-full md:max-w-[350px]
      ${poppins.className}
    `}>
      <div className='text-indigo-200/90 flex justify-center items-center gap-[2px]'>
        <span className='font-normal md:font-semibold'>{moment(data.start_time).format('hh:mm A')}</span>
        <span className='font-normal md:font-semibold'>-</span>
        <span className='font-normal md:font-semibold'>{moment(data.end_time).format('hh:mm A')}</span>
      </div>
      <div className='h-px w-full bg-indigo-400/40'></div>
      <div className='w-full text-indigo-200/80'>
        <h2 className='font-normal md:font-semibold'>{data.course_title}</h2>
        <div className='text-sm font-thin md:font-normal md:text-base'>Teacher: {data.teacher_name}</div>
        <div className='text-sm font-thin md:font-normal md:text-base'>Room: {data.room_no}</div>
      </div>
    </div>
  )
}

export default TodaysClass