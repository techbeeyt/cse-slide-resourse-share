import React from 'react'
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import { drive_v3 } from "googleapis";
import FileCard from '@/app/components/fileCard/FileCard';
import Breadcumb from '@/app/components/breadcumb/Breadcumb';
import { getFolder } from '@/app/actions/getFolderById';

const Resources = async () => {
  const rootData: drive_v3.Schema$FileList = await getFolder(null);
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
          rootData.files?.map((item) => {
            return (
              <FileCard
                key={item.id}
                fileId={item.id as string}
                fileName={item.name as string}
                mimeType={item.mimeType as string}
              />
            );
          })
        }
      </div>
    </PrimaryContainer>
  )
}

export default Resources