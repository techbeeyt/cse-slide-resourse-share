"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UpcomingEvent from '@/app/components/UpcomingEventList/UpcomingEvent';
import UpcomingEventSkeleton from './UpcomingEventSkeleton';


const UpcomingEventList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/events")
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
  }, [])
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
          events.map((item, index) => {
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
