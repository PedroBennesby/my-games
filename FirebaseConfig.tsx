import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyADWeFzGA3sfLGIwXoXdyVfLxuBJ8KOGro',
  authDomain: 'my-games-131313.firebaseapp.com',
  projectId: 'my-games-131313',
  storageBucket: 'my-games-131313.appspot.com',
  messagingSenderId: '244376631077',
  appId: '1:244376631077:web:0d07283312a07f6cae0ccc',
  measurementId: 'measurementID',
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;
