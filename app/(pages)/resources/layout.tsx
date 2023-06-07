import { getFolder } from "@/app/actions/getFolderById";
import PageContainer from "@/app/components/container/PageContainer";
import PrimaryContainer from "@/app/components/container/PrimaryContainer";
import { driveDataType } from "@/app/types/driveResponseDataTypes";
import Link from "next/link";
import React from "react";
import { FcFolder } from "react-icons/fc";



export default async function FolderLayout({ children } : {
  children: React.ReactNode
}) {
  const rootData: driveDataType[] = await getFolder(process.env.NEXT_PUBLIC_CURRENT_SEMESTER_FOLDER_ID as string);
  console.log(rootData);
  return (
    <PageContainer>
      <div className="pr-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3  relative">
            <div className="sticky top-[80px] left-0">
              <PrimaryContainer
                title="Current Semester"
                divider
              >
                <div className="w-full flex flex-col justify-start items-start">
                  {
                    rootData.map((item, index) => {
                      if(item.mimeType !== 'application/vnd.google-apps.folder') {
                        return null;
                      }
                      return (
                        <Link 
                          href={`/resources/folder?id=${item.id}&name=${item.name}`} key={index} 
                          className="
                            flex justify-start items-center gap-2
                            border-b border-gray-300/30 py-2 pl-2 w-full 
                            hover:bg-gray-200/20
                            hover:rounded-sm
                          "
                        >
                          <FcFolder size={22} />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })
                  }
                </div>
              </PrimaryContainer>
            </div>
          </div>

          <div className="col-span-9">
            {children}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}