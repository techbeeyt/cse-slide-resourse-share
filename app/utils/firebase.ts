import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging'
import Config from '../config';

const app = initializeApp(Config.firebaseConfig);
export const messaging = getMessaging(app);

export default app;