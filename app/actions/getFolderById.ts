import axios from 'axios';
import { driveDataType } from '@/app/types/driveResponseDataTypes';

export async function getFolder(id: string | null | undefined): Promise<driveDataType[]> {
  if(!id) {
    id = "root";
  }
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DRIVE_API_BASE_URL}/folder/${id}`);
  return res.data;
}