import drive from "@/app/libs/googleDriveApi";
import { drive_v3 } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  const id = "root";
  const q = `'${id}' in parents and trashed = false`;

  const listParams: drive_v3.Params$Resource$Files$List = {
    q: q,
    fields: 'nextPageToken, files(id, name, mimeType)'
  }
  const response = await drive.files.list(listParams);

  return NextResponse.json(response.data);
}