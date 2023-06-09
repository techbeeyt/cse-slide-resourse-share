"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UpcomingEvent from '@/app/components/UpcomingEventList/UpcomingEvent';
import UpcomingEventSkeleton from './UpcomingEventSkeleton';
import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch('/api/events', { cache: 'no-store' });
  const data = await res.json();
  return data;
}

const UpcomingEventList = () => {
  const { data, error, isLoading } = useSWR('/api/events', fetcher);

  if(isLoading) {
    return (
      <>
        <div className="hidden md:grid grid-cols-3 gap-4">
          {
            Array(3).fill(0).map((item, index) => {
              return (
                <UpcomingEventSkeleton key={index} />
              );
            })
          }
        </div>
        <div className='block md:hidden'>
          <UpcomingEventSkeleton />
        </div>
      </>
    )
  }
  
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
          data.map((item: any, index: number) => {
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
