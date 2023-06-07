import React from 'react'
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import { driveDataType } from '@/app/types/driveResponseDataTypes';
import FileCard from '@/app/components/fileCard/FileCard';
import Breadcumb from '@/app/components/breadcumb/Breadcumb';
import { getFolder } from '@/app/actions/getFolderById';

const Resources = async () => {
  const rootData: driveDataType[] = await getFolder(null);
  return (
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
  )
}

export default Resources