"use client";

import React from 'react'
import ModalContainer from '../container/ModalContainer'
import useEventDetailsModal from '@/app/hooks/useEventDetailsModal';
import PrimaryContainer from '../container/PrimaryContainer';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url, { cache: 'no-store' }).then((res) => res.json());

const EventDetailsModal = () => {
  const modal = useEventDetailsModal();
  const { data, isLoading } = useSWR(`/api/events/${modal.eventId}`, fetcher);
  const da = JSON.stringify(data);

  if (!modal.isOpen) return null;
  return (
    <ModalContainer
      onClose={modal.onClose}
    >
      <div className='w-full h-full flex justify-center items-center'>
        <div className='bg-secondary rounded-sm md:rounded-3xl p-4 w-[500px]'>
        <PrimaryContainer
            title='Event Title'
            divider
            largeTitle
            subtitle='Close'
            subtitleClickAction={modal.onClose}
          >
            {
              isLoading ? (
                <div className='flex justify-center items-center w-full h-full'>
                  <div className='text-neutral-400 italic'>Loading...</div>
                </div>
              ) : (
                <div className='flex justify-center items-center w-full h-full'>
                  <div className='text-neutral-400 italic'>
                    {
                      da
                    }
                  </div>
                </div>
              )
            }
          </PrimaryContainer>
        </div>
      </div>
    </ModalContainer>
  )
}

export default EventDetailsModal
