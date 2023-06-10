import moment from 'moment';
import React from 'react';

interface TodaysClassProps {
  data: any;
  index: number;

}

const TodaysClass: React.FC<TodaysClassProps> = ({
  data,
  index
}) => {
  const colors = [ "bg-[#a7f3d0]", "bg-[#ECACD8]", "bg-[#C8ACEC]", "bg-[#51e4cb]", "bg-[#ECBEAC]", "bg-[#A4CDDC]", "bg-[A4DCB1]" ]
  return (
    <div className={`${colors[index % (colors.length - 1)]} px-4 py-2 rounded-xl flex flex-col justify-start items-center gap-1 w-full md:max-w-[350px]`}>
      <div className='text-black/90 flex justify-center items-center gap-2'>
        <span className='font-semibold'>{moment(data.start_time).format('hh:mm A')}</span>
        <span className='font-semibold'>-</span>
        <span className='font-semibold'>{moment(data.end_time).format('hh:mm A')}</span>
      </div>
      <div className='h-px w-full bg-gray-400'></div>
      <div className='w-full'>
        <h2 className='text-gray-800/90 font-semibold'>{data.course_title}</h2>
        <div className='text-gray-800/90'>Teacher: {data.teacher_name}</div>
        <div className='text-gray-800/90'>Room: {data.room_no}</div>
      </div>
    </div>
  )
}

export default TodaysClass