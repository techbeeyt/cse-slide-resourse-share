"use client";

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UpcomingEvent from '@/app/components/UpcomingEventList/UpcomingEvent';


interface UpcomingEventListProps {
  events: any[];
}

const UpcomingEventList: React.FC<UpcomingEventListProps> = ({
  events
}) => {
  return (
    <>
      <Swiper
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
