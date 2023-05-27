"use client";

import React from 'react';
import PageContainer from '@/app/components/container/PageContainer';
import { getFile } from '@/app/actions/getFileById';
import { useRouter, useSearchParams } from 'next/navigation';
import { HiArrowSmLeft } from 'react-icons/hi';

const FilePage = async () => {
  const params = useSearchParams();
  const id = params.get("id");
  const name = params.get("name");
  const fileLink = await getFile(id);

  const router = useRouter();
  const goBack = () => {
    router.back();
  }
  return (
    <PageContainer>
      <div className="pr-4">
        <div className="bg-black/40 px-2 py-3 rounded-md text-xl font-semibold flex flex-row justify-start items-center gap-4">
          <button className="text-3xl" onClick={goBack}>
            <HiArrowSmLeft />
          </button>
          {name}
        </div>
        <div className="flex flex-col justify-center items-center mt-32 gap-2 -translate-x-[20px]">
          <span>Click the button to open the file</span>
          <a href={fileLink.webViewLink} className="bg-sky-500 px-4 py-2 rounded text-white">View File</a>
        </div>
      </div>
    </PageContainer>
  )
}

export default FilePage