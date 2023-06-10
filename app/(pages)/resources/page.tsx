import React from 'react'
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import { drive_v3 } from "googleapis";
import FileCard from '@/app/components/fileCard/FileCard';
import Breadcumb from '@/app/components/breadcumb/Breadcumb';
import { getFolder } from '@/app/actions/getFolderById';
import { getRecentOpened } from '@/app/actions/getRecentOpened';

const Resources = async () => {
  const rootData: drive_v3.Schema$FileList = await getFolder(null);
  const recentOpenedData: drive_v3.Schema$FileList = await getRecentOpened();
  return (
    <div className="flex flex-col justify-start item-start gap-4">
      <PrimaryContainer
        title='Recently Opened Files'
      > 
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7'>
          {
            recentOpenedData.files?.map((item) => {
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
      <PrimaryContainer
        title='Resources'
        divider
      > 
        <div className='my-2'>
          <Breadcumb
            leaf="Root"
          />
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7'>
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
    </div>
  )
}

export default Resources