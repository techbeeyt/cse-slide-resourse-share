import React from 'react';
import moment from 'moment'

type EventDataType = {
  id: string;
  title: string;
  description?: string;
  date: Date
  time: Date
}

interface UpcomingEventProps {
  data: EventDataType;
  index: number;
}

const colors = [ "bg-[#FFBFBF]", "bg-[#ECACD8]", "bg-[#C8ACEC]", "bg-[#51e4cb]", "bg-[#ECBEAC]", "bg-[#A4CDDC]", "bg-[A4DCB1]" ]

const UpcomingEvent: React.FC<UpcomingEventProps> = ({
  data,
  index
}) => {
  const daysRemaining = moment(data.date).diff(moment(), 'days');
  return (
    <div className={`${colors[index % (colors.length - 1)]} px-4 py-2 rounded-xl flex justify-start items-center gap-2 max-w-[350px]`}>
      <div className='text-black/90 flex flex-col justify-center items-center gap-0'>
        <span className='text-lg font-bold'>{moment(data.date).date()}</span>
        <span>{moment(data.date).format('MMM')}</span>
      </div>
      <div className='h-12 w-px bg-gray-400 mx-2'></div>
      <div>
        <h2 className='text-neutral-700/90 font-semibold'>{data.title}</h2>
        <div className='text-neutral-700/90'>{data.description}</div>
        <div className='text-red-900 font-semibold'>{daysRemaining === 0 ? `Today, ${moment(data.time).format('hh:mm a')}` : `${daysRemaining} days to go`}</div>
      </div>
    </div>
  )
}

export default UpcomingEvent