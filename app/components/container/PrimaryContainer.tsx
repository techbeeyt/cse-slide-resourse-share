"use client"

import React from 'react';

interface PrimaryContainerProps {
  children: React.ReactNode;
  title?: string;
  largeTitle?: boolean;
  divider?: boolean;
  subtitle?: string;
  subtitleClickAction?: () => void;
}

const PrimaryContainer: React.FC<PrimaryContainerProps> = ({
  children,
  title,
  largeTitle,
  divider,
  subtitle,
  subtitleClickAction
}) => {
  return (
    <div className='bg-secondary px-6 py-4 rounded-3xl'>
      <div 
        className={`
          flex justify-between items-center
          ${divider ? "" : "mb-3"}
        `}
      >
        {
          title ? (
            <h1
              className={`
                ${largeTitle ? "text-xl mb:text-2xl" : "text-base md:text-lg"}
                ${largeTitle ? "font-bold" : "font-semibold"}
                text-sky-200/80
              `}
            >
              {title}
            </h1>
          ) : null
        }

        {
          subtitle ? (
            <h2
              className={`
                ${subtitleClickAction ? "text-sky-400" : "text-white/90"}
                ${subtitleClickAction ? "cursor-pointer" : ""}
              `}
              onClick={subtitleClickAction}
            >
              {subtitle}
            </h2>
          ) : null
        }
      </div>
      
      {
        divider ? (
          <div className='h-px bg-gray-400/50 w-full my-2'></div>
        ) : null
      }
      <div className='relative'>
        {children}
      </div>
    </div>
  )
}

export default PrimaryContainer