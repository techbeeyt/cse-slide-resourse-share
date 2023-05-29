"use client";

import Link from 'next/link';
import React from 'react';
import { FcFolder, FcImageFile, FcDocument } from 'react-icons/fc';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { AiOutlineFile, AiFillFileZip } from 'react-icons/ai';


const mimeTypeChecker = (mimeType: string) => {
  
  if(mimeType === "application/vnd.google-apps.folder") {
    return "folder";
  }

  if(mimeType.includes("image")) {
    return "image";
  }

  if(mimeType === "application/pdf") {
    return "pdf";
  }

  if(mimeType === "application/zip") {
    return "zip";
  }

  if(mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
    return "docx";
  }

  else return "other";
}

interface FileCardProps {
  mimeType: string;
  fileName: string;
  fileId: string;
}

const FileCard: React.FC<FileCardProps> = ({
  mimeType,
  fileName,
  fileId
}) => {
  return (
    <Link href={`/resources/${mimeTypeChecker(mimeType) === "folder" ? "folder" : "file"}?id=${fileId}&name=${fileName}`} className='flex flex-col justify-start items-center gap-1.5 relative group'>
      {mimeTypeChecker(mimeType) == "folder" ? (<FcFolder size={50} />) : null}
      {mimeTypeChecker(mimeType) == "image" ? (<FcImageFile size={50} />) : null}
      {mimeTypeChecker(mimeType) == "pdf" ? (<BsFileEarmarkPdfFill size={50} color='#FF3400' />) : null}
      {mimeTypeChecker(mimeType) == "zip" ? (<AiFillFileZip size={50} />) : null}
      {mimeTypeChecker(mimeType) == "docx" ? (<FcDocument size={50} />) : null}
      {mimeTypeChecker(mimeType) == "other" ? (<AiOutlineFile size={50} />) : null}
      <h3 className='font-semibold text-sm text-center'>{fileName.slice(0, 18)}</h3>
      <div className={`absolute z-40 bg-neutral-800 px-3 py-2 border border-neutral-600/90 rounded text-white/90 hidden ${fileName.length > 18 ? "group-hover:block" : ""}  -bottom-4`}>
        <span className="whitespace-nowrap">{fileName}</span>
      </div>
    </Link>
  )
}

export default FileCard