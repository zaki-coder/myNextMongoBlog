// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextmongoblog.firebaseapp.com",
  projectId: "nextmongoblog",
  storageBucket: "nextmongoblog.appspot.com",
  messagingSenderId: "365441154409",
  appId: "1:365441154409:web:1d7484dae8aa8a3e6b11f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);