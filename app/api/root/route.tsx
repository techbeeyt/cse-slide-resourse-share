import drive from '@/app/utils/googleDriveApi';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const q = "'root' in parents";
  let response;
  try {
    response = await drive.files.list({
      q,
      fields: "nextPageToken, files(id, name, mimeType)"
    });
  } catch(error: any) {
    console.log("Error:");
    console.log(error);
  }
  const nextPageToken = response?.data.nextPageToken;
  const files = response?.data.files;
  if(nextPageToken && files) {
    return NextResponse.json({
      nextPageToken,
      files
    })
  }
}