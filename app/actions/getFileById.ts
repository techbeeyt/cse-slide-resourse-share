import drive from '@/app/libs/googleDriveApi';
import { drive_v3 } from 'googleapis';


export async function getFile(id: string | null): Promise<string> {
  const fileParam: drive_v3.Params$Resource$Files$Get = {
    fileId: id as string,
    fields: 'id, name, mimeType, webViewLink'
  }
  const response = await drive.files.get(fileParam);

  const link: string = response.data.webViewLink as string;

  return link;
}