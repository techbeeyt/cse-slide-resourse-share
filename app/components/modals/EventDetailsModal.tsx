"use client";

import React, { MouseEventHandler } from 'react'
import ModalContainer from '../container/ModalContainer'
import useEventDetailsModal from '@/app/hooks/useEventDetailsModal';
import PrimaryContainer from '../container/PrimaryContainer';
import useSWR from 'swr';
import moment from 'moment'
import fetcher from '@/app/libs/fetcherFunc';



const EventDetailsModal = () => {
  const modal = useEventDetailsModal();
  const { data, isLoading } = useSWR(`/api/events/${modal.eventId}`, fetcher);

  const handleEventDelegation: MouseEventHandler<HTMLDivElement> = (e) => {
    if(e.target === e.currentTarget) {
      modal.onClose();
    }
  }

  if (!modal.isOpen) return null;
  return (
    <ModalContainer
      onClose={handleEventDelegation}
      center
    >
      <div className='bg-secondary rounded-xl md:rounded-3xl w-[90vw] md:w-[500px] lg:w-[700px] -translate-y-[100px]'>
        <PrimaryContainer
            title={data?.title}
            subtitle='Close'
            subtitleClickAction={modal.onClose}
          >
            {
              isLoading ? (
                <div className='flex justify-center items-center w-full h-full'>
                  <div className='text-neutral-400 italic'>Loading...</div>
                </div>
              ) : (
                <div className='flex flex-col justify-start items-start w-full h-full'>
                    <div className="bg-gray-500/50 px-4 py-2 rounded-md w-full">
                      <div className="font-semibold text-gray-200">Description:</div> 
                      <div className="text-gray-300">
                        {data?.description}
                      </div>
                      <div className="text-gray-400 italic">
                        -at {moment(data.time).format('hh:mm a')} on {moment(data.date).format("DD MMM")} 
                      </div>
                    </div>
                    <div className="bg-gradient-to-t from-neutral-900/40 to-neutral-800/40 min-h-[100px] w-full mt-4 rounded-t-xl p-3">
                      <span className="text-gray-400">Discussion System Will be added soon..</span>
                    </div>
                    <div className="w-full">
                      <div className="bg-gradient-to-tr from-purple-600 to-pink-500 text-white w-full text-center rounded-b-xl px-4 py-1.5 text-white/80">Start Discussion</div>
                    </div>
                    
                </div>
              )
            }
          </PrimaryContainer>
        </div>
    </ModalContainer>
  )
}

export default EventDetailsModal
