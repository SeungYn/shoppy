// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCGkaYkXgIpcjU1d57rNtT-saEpdxzptD4',
  authDomain: 'shoopy-701da.firebaseapp.com',
  databaseURL:
    'https://shoopy-701da-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'shoopy-701da',
  storageBucket: 'shoopy-701da.appspot.com',
  messagingSenderId: '488849970075',
  appId: '1:488849970075:web:90e8e5fc55e5694ecf073e',
  measurementId: 'G-9CL6PTDX5M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
