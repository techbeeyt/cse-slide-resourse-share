import { drive_v3 } from 'googleapis';
import drive from '@/app/libs/googleDriveApi';

export async function getRecentOpened(): Promise<drive_v3.Schema$FileList> {
  const q = `trashed = false and mimeType != 'application/vnd.google-apps.folder'`;
  const listParams: drive_v3.Params$Resource$Files$List = {
    q: q,
    fields: 'nextPageToken, files(id, name, mimeType)',
    orderBy: 'recency desc',
    pageSize: 10
  }

  const response = await drive.files.list(listParams);
  return response.data;
}