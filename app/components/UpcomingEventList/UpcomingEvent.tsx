"use client";

import React from 'react';
import moment from 'moment'
import useEventDetailsModal from '@/app/hooks/useEventDetailsModal';
import { EventDataType } from '@/app/types';

interface UpcomingEventProps {
  data: EventDataType;
  index: number;
}

const colors = [ "bg-[#FFBFBF]", "bg-[#ECACD8]", "bg-[#C8ACEC]", "bg-[#51e4cb]", "bg-[#ECBEAC]", "bg-[#A4CDDC]", "bg-[A4DCB1]" ]

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
        ${colors[index % (colors.length - 1)]}
        px-4 py-2 rounded-xl 
        flex justify-start items-center 
        gap-2 
        w-full md:w-auto
        min-h-[130px]
        cursor-pointer
        transition-all
        duration-100
        active:scale-95
      `}
    >
      <div className='text-black/90 flex flex-col justify-center items-center gap-0'>
        <span className='text-lg font-bold'>{moment(data.date).date()}</span>
        <span>{moment(data.date).format('MMM')}</span>
      </div>
      <div className='h-20 w-px bg-gray-400 mx-2'></div>
      <div className="flex flex-col justify-between items-start h-[120px] md:h-[100px]">
        <h2 className='text-neutral-700/90 font-semibold'>{data.title}</h2>
        <div className='text-neutral-700/90'>{data.description?.substring(0, 55)}{data.description && (data.description?.length > 55) ? "..." : ''}</div>
        <div className='text-red-900 font-normal md:font-semibold mt-auto'>{daysRemaining === 0 ? `Today, ${moment(data.time).format('hh:mm a')}` : `${daysRemaining} days to go`}</div>
      </div>
    </div>
  )
}

export default UpcomingEvent