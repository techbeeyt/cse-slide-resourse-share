"use client";

import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import UpcomingEvent from '@/app/components/UpcomingEventList/UpcomingEvent';

import "swiper/css";
import "swiper/css/pagination";
import ContentContainer from '../container/ContentContainer';


interface UpcomingEventListProps {
  events: any[];
}

const UpcomingEventList: React.FC<UpcomingEventListProps> = ({
  events
}) => {
  if(events.length === 0) {
    return (
      <ContentContainer
        title="Upcoming Events"
        actionLabel="See all"
      >
        <div className='flex justify-center mb:justify-start items-center w-full h-full'>
          <div className='text-neutral-400 italic'>No events found</div>
        </div>
      </ContentContainer>
    );
  }
  return (
    <ContentContainer
      title="Upcoming Events"
      actionLabel="See all"
    >
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
    </ContentContainer>
  )
}


export default UpcomingEventList;
