import React from 'react'
import PageContainer from '@/app/components/container/PageContainer';
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import FileCardSkeleton from '@/app/components/fileCard/fileCardSkeleton';

const ResourceLoadingUI = () => {
  return (
    <PageContainer>
      <PrimaryContainer
        title='Resources'
        divider
      >
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
            {
              Array.from({ length: 8}).map((item, index) => {
                return (
                  <FileCardSkeleton key={index} />
                );
              })
            }
          </div>
      </PrimaryContainer>
    </PageContainer>
  )
}

export default ResourceLoadingUI