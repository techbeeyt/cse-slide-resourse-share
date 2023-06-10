import { google, drive_v3, Auth, Common } from 'googleapis';

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;


const oauth2Client: Auth.OAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive: drive_v3.Drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});

export default drive;