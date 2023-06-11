"use client"

import React from 'react'
import ContentContainer from '../container/ContentContainer';
import TodaysClass from './TodaysClass';

interface TodaysClassListProps {
  routines: any[];
}

const TodaysClassList: React.FC<TodaysClassListProps> = ({
  routines
}) => {
  if(routines.length === 0) {
    return (
      <ContentContainer
        title="Today's Classes"
        actionLabel="See all"
      >
        <div className='flex justify-center md:justify-start items-center w-full h-full'>
          <div className='text-neutral-400 italic'>Chill! No class for today.</div>
        </div>
      </ContentContainer>
    );
  }
  return (
    <ContentContainer
      title="Today's Classes"
      actionLabel="See all"
    >
      <div
        className='
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          gap-2
          md:gap-4
          w-full
        '
      >
        {
          routines.map((item: any, index: number) => {
            return (
              <TodaysClass key={index} index={index} data={item} />
            )
          })  
        }
      </div>
    </ContentContainer>
  )
}

export default TodaysClassList
