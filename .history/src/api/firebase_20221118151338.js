import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'shoopy-701da.firebaseapp.com',
  databaseURL:
    'https://shoopy-701da-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'shoopy-701da',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
