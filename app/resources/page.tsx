import React from 'react'
import PageContainer from '../components/container/PageContainer';
import PrimaryContainer from '../components/container/PrimaryContainer';
import { driveDataType } from '@/app/types/driveResponseDataTypes';
import FileCard from '../components/fileCard/FileCard';
import Breadcumb from '../components/breadcumb/Breadcumb';
import { getFolder } from '../actions/getFolderById';

const Resources = async () => {
  const rootData: driveDataType[] = await getFolder(null);
  return (
    <PageContainer>
      <div className='pr-4'>
        <PrimaryContainer
          title='Resources'
          divider
        > 
          <div className='my-2'>
            <Breadcumb
              leaf="Root"
            />
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
            {
              rootData.map((item) => {
                return (
                  <FileCard
                    key={item.id}
                    fileId={item.id}
                    fileName={item.name}
                    mimeType={item.mimeType}
                  />
                );
              })
            }
          </div>
        </PrimaryContainer>
      </div>
    </PageContainer>
  )
}

export default Resources