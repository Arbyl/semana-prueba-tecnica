// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUGmb-97QSHRQGwPoloVZZhd60V37FFe4",
  authDomain: "semana-test.firebaseapp.com",
  projectId: "semana-test",
  storageBucket: "semana-test.appspot.com",
  messagingSenderId: "364439776793",
  appId: "1:364439776793:web:67b197affcc2163d630488",
  measurementId: "G-DYWXTDBFBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
