"use client";

import Link from 'next/link';
import React from 'react';
import { FcFolder, FcImageFile, FcDocument } from 'react-icons/fc';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { AiOutlineFile, AiFillFileZip } from 'react-icons/ai';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})


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
    <Link 
      href={`/resources/${mimeTypeChecker(mimeType) === "folder" ? "folder" : "file"}?id=${fileId}&name=${fileName}`}
      className={`flex flex-col justify-start items-center gap-1.5 relative group ${poppins.className}}`}
    >
      {mimeTypeChecker(mimeType) == "folder" ? (<FcFolder size={50}  />) : null}
      {mimeTypeChecker(mimeType) == "image" ? (<FcImageFile size={50} />) : null}
      {mimeTypeChecker(mimeType) == "pdf" ? (<BsFileEarmarkPdfFill size={50} color='#FF3400' />) : null}
      {mimeTypeChecker(mimeType) == "zip" ? (<AiFillFileZip size={50} />) : null}
      {mimeTypeChecker(mimeType) == "docx" ? (<FcDocument size={50} />) : null}
      {mimeTypeChecker(mimeType) == "other" ? (<AiOutlineFile size={50} />) : null}
      <h3 className='font-thin md:font-normal text-sm text-center break-all'>{fileName}</h3>
    </Link>
  )
}

export default FileCard