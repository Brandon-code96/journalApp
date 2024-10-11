// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIRESTORE_API,
//   authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_FIRESTORE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyB2sVIs4CNsFn416mR-oz8nsTDcMNSQyLM",
  authDomain: "journal-app-c13ac.firebaseapp.com",
  projectId: "journal-app-c13ac",
  storageBucket: "journal-app-c13ac.appspot.com",
  messagingSenderId: "1002527650299",
  appId: "1:1002527650299:web:82a781d1a82f820dea9b5e",
}
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )