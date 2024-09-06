// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: "semana-test.firebaseapp.com",
  projectId: "semana-test",
  storageBucket: "semana-test.appspot.com",
  messagingSenderId: "364439776793",
  appId: "1:364439776793:web:67b197affcc2163d630488",
  measurementId: "G-DYWXTDBFBL"
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('User signed in:', result.user);
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
