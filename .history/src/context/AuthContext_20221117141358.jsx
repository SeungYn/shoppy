// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Firebase from '../http/firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyCGkaYkXgIpcjU1d57rNtT-saEpdxzptD4',
//   authDomain: 'shoopy-701da.firebaseapp.com',
//   databaseURL:
//     'https://shoopy-701da-default-rtdb.asia-southeast1.firebasedatabase.app',
//   projectId: 'shoopy-701da',
//   storageBucket: 'shoopy-701da.appspot.com',
//   messagingSenderId: '488849970075',
//   appId: '1:488849970075:web:90e8e5fc55e5694ecf073e',
//   measurementId: 'G-9CL6PTDX5M',
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();
// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     console.log(result);
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//     console.log(token, user);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
const firebase = new Firebase();

const authContext = createContext({});

export default function AuthContext({ children }) {
  const [user, setUser] = useState(undefined);

  const HandleLogin = async () => {
    return firebase.loginPopup().then((uid) => {
      if (uid) {
        setUser(uid);
        localStorage.setItem('USER', uid);
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem('USER')) {
      setUser(localStorage.getItem('USER'));
    }
  }, []);
  return (
    <authContext.Provider value={{ onLogin: HandleLogin, user }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
