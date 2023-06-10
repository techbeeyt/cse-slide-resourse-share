"use client";

import React from 'react'
import PageContainer from '@/app/components/container/PageContainer';
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import Breadcumb from '@/app/components/breadcumb/Breadcumb';
import { useSearchParams } from 'next/navigation';
import FileCardSkeleton from '@/app/components/fileCard/FileCardSkeleton';

const ResourceLoadingUI = () => {
  const params = useSearchParams();
  const name = params.get("name");
  return (
    <PrimaryContainer
      title='Resources'
      divider
    >
      <div className='my-2'>
        <Breadcumb
          parents={[{ label: "Root", url: "/resources"}]}
          leaf={name}
        />
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
          {
            Array.from({ length: 5}).map((item, index) => {
              return (
                <FileCardSkeleton key={index} />
              );
            })
          }
        </div>
    </PrimaryContainer>
  )
}

export default ResourceLoadingUI