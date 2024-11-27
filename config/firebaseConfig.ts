// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
  authDomain: "trip-planner-b5bac.firebaseapp.com",
  projectId: "trip-planner-b5bac",
  storageBucket: "trip-planner-b5bac.firebasestorage.app",
  messagingSenderId: "269816847768",
  appId: "1:269816847768:web:cddbfff993e4897b6d5fed",
  measurementId: "G-QDTKY1F0K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)