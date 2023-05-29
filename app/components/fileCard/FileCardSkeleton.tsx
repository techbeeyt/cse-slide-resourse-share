"use client";

import React from 'react'

const FileCardSkeleton = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-1.5 animate-pulse'>
      <div className='w-16 h-16 bg-transparent flex justify-center items-center'>
        <div className="bg-gray-200/30 w-10 h-10 rounded-lg">
        </div>
      </div>
      <div className='w-[100px] h-4 bg-gray-200/30 rounded-lg'></div>
    </div>
  )
}

export default FileCardSkeleton;
