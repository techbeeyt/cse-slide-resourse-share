import { getFolder } from '@/app/actions/getFolderById';
import React from 'react';
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import Breadcumb from '@/app/components/breadcumb/Breadcumb';
import FileCard from '@/app/components/fileCard/FileCard';
import { drive_v3 } from 'googleapis';

const FolderPage = async ({
  params,
  searchParams
} : {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const folderData: drive_v3.Schema$FileList = await getFolder(searchParams?.id as string);
  const name = searchParams?.name as string;
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
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3'>
        {
          folderData.files?.map((item) => {
            return (
              <FileCard
                key={item.id as string}
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

export default FolderPage