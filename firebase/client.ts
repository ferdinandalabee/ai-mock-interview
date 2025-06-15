// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuewvs9zaC_xT1hcZgyaXcOP7EIdFCCYg",
  authDomain: "prepwise-61320.firebaseapp.com",
  projectId: "prepwise-61320",
  storageBucket: "prepwise-61320.firebasestorage.app",
  messagingSenderId: "937133315217",
  appId: "1:937133315217:web:fa9a1706035ae8d41e9b30",
  measurementId: "G-MXZ88XRJVV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
