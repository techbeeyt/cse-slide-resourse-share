"use client";

import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import UpcomingEvent from '@/app/components/UpcomingEventList/UpcomingEvent';

import "swiper/css";
import "swiper/css/pagination";


interface UpcomingEventListProps {
  events: any[];
}

const UpcomingEventList: React.FC<UpcomingEventListProps> = ({
  events
}) => {
  if(events.length === 0) {
    return (
      <div className='flex justify-center items-center w-full h-full'>
        <div className='text-2xl font-semibold text-neutral-700'>No events found</div>
      </div>
    );
  }
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className='mySwiper'
        breakpoints={
          {
            300: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15
            }
          }
        }
      >
        {
          events.map((item: any, index: number) => {
            return (
              <SwiperSlide
                key={index}
              >
                <UpcomingEvent
                  data={item}
                  index={index}
                />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </>
  )
}


export default UpcomingEventList;
