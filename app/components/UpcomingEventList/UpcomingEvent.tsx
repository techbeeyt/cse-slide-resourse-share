"use client";

import React from 'react';
import moment from 'moment'
import useEventDetailsModal from '@/app/hooks/useEventDetailsModal';
import { EventDataType } from '@/app/types';
import { Poppins } from 'next/font/google';

interface UpcomingEventProps {
  data: EventDataType;
  index: number;
}

const colors = [ "bg-[#FFBFBF]", "bg-[#ECACD8]", "bg-[#C8ACEC]", "bg-[#51e4cb]", "bg-[#ECBEAC]", "bg-[#A4CDDC]", "bg-[A4DCB1]" ];

const poppins = Poppins({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})
// ${colors[index % (colors.length - 1)]}
const UpcomingEvent: React.FC<UpcomingEventProps> = ({
  data,
  index
}) => {
  const eventDetailModal = useEventDetailsModal();
  const daysRemaining = moment(data.date).diff(moment(), 'days');
  return (
    <div
      onClick={() => {
        eventDetailModal.onOpen(data.id);
      }}
      className={`
        bg-gradient-to-bl from-teal-500 to-green-500
        px-4 py-2 rounded-xl 
        flex justify-start items-center 
        gap-2 
        w-full md:w-auto
        min-h-[130px]
        cursor-pointer
        transition-all
        duration-100
        active:scale-95
        ${poppins.className}
      `}
    >
      <div className='text-black/90 flex flex-col justify-center items-center gap-0'>
        <span className='text-lg font-semibold md:font-bold text-green-900'>{moment(data.date).date()}</span>
        <span className="font-extralight md:font-normal text-green-800">{moment(data.date).format('MMM')}</span>
      </div>
      <div className='h-20 w-px bg-teal-600 mx-1 md:mx-2'></div>
      <div className="flex flex-col justify-between items-start min-h-[100px] md:min-h-[100px]">
        <h2 className='text-neutral-700/90 font-normal md:font-semibold'>{data.title}</h2>
        <div className='text-neutral-700/90 leading-tight md:leading-normal text-sm md:text-base font-extralight md:font-normal'>{data.description?.substring(0, 55)}{data.description && (data.description?.length > 55) ? "..." : ''}</div>
        <div className='text-red-900 font-normal md:font-semibold mt-auto'>{daysRemaining === 0 ? `Today, ${moment(data.time).format('hh:mm a')}` : `${daysRemaining} days to go`}</div>
      </div>
    </div>
  )
}

export default UpcomingEvent