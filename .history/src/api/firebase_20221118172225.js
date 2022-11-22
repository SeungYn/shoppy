import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, child, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export function login() {
  signInWithPopup(auth, provider).catch((error) => {
    console.log(error);
  });
}

export function logout() {
  signOut(auth).catch((error) => {
    console.log(error);
  });
}

export function onUserStateChange(callback) {
  // 1.사용자가 있는 경우에
  //2 사용자가 어드민 권한을 가지고 있는지 확인
  //3. {...user, isAdmin: true/false}

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    callback(user);
  });
}

async function adminUser(user) {
  return getAuth();
}
