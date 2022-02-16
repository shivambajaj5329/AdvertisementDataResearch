// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChWmtZejtDuMAeBv_Ie25xgapf5dYX--8",
  authDomain: "advertisementresearch-6a014.firebaseapp.com",
  projectId: "advertisementresearch-6a014",
  storageBucket: "advertisementresearch-6a014.appspot.com",
  messagingSenderId: "582186989299",
  appId: "1:582186989299:web:2fca6d51291fd400e06986"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export { app, db, storage}