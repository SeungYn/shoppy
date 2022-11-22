import { initializeApp } from 'firebase/app';
import { createContext, useContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

export default class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
  }

  async loginPopup() {
    return await signInWithPopup(this.auth, this.provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        return user.providerUserInfo[0];
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
}
