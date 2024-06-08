// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authmern-b706b.firebaseapp.com",
  projectId: "authmern-b706b",
  storageBucket: "authmern-b706b.appspot.com",
  messagingSenderId: "773467653043",
  appId: "1:773467653043:web:da448230ed33e9a3c6c1c6",
  measurementId: "G-W2HZQE85MF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
