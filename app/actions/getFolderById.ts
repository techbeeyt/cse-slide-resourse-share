import { drive_v3 } from 'googleapis';
import drive from '@/app/libs/googleDriveApi';

export async function getFolder(id: string | null | undefined): Promise<drive_v3.Schema$FileList> {
  if(!id) {
    id = "root";
  }
  const q = `'${id}' in parents and trashed = false`;
  const listParams: drive_v3.Params$Resource$Files$List = {
    q: q,
    fields: 'nextPageToken, files(id, name, mimeType)'
  }

  const response = await drive.files.list(listParams);
  return response.data;
}