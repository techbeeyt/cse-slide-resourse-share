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
          ${divider ? "mb-1" : "mb-4"}
        `}
      >
        {
          title ? (
            <h1
              className={`
                ${largeTitle ? "text-2xl" : "text-lg"}
                font-bold
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
            >
              {subtitle}
            </h2>
          ) : null
        }
      </div>
      
      {
        divider ? (
          <div className='h-px bg-gray-400/50 w-full mb-2'></div>
        ) : null
      }
      <div className='relative'>
        {children}
      </div>
    </div>
  )
}

export default PrimaryContainer