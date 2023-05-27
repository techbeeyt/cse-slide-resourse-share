"use client";

import { getFolder } from '@/app/actions/getFolderById';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import PageContainer from '@/app/components/container/PageContainer';
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import Breadcumb from '@/app/components/breadcumb/Breadcumb';
import FileCard from '@/app/components/fileCard/FileCard';

const FolderPage = async () => {
  const params = useSearchParams();
  const id = params.get("id");
  const folderData = await getFolder(id);
  const name = params.get("name");
  return (
    <PageContainer>
      <div className='pr-4'>
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
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
            {
              folderData.map((item) => {
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

export default FolderPage