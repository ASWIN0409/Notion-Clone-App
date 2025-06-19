// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIhkn1GQTlyFfS1Rlo9NyAlPRcPpDd-tg",
  authDomain: "notion-project-7c67a.firebaseapp.com",
  projectId: "notion-project-7c67a",
  storageBucket: "notion-project-7c67a.firebasestorage.app",
  messagingSenderId: "1086396817182",
  appId: "1:1086396817182:web:b9ec3e9ba1d83d10f8730f",
  measurementId: "G-1XMY116WJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);