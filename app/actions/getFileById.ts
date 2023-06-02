import axios from 'axios';

type FileLinkType = {
  webViewLink: string
}

export async function getFile(id: string | null): Promise<FileLinkType> {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DRIVE_API_BASE_URL}/file/${id}`);
  return res.data;
}