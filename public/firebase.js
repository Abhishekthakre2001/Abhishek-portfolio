// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTCtQO_-mJ_WdsyRKBRHQzs7x5GLKqo8E",
  authDomain: "abhishek-3ebea.firebaseapp.com",
  projectId: "abhishek-3ebea",
  storageBucket: "abhishek-3ebea.appspot.com",
  messagingSenderId: "29656954550",
  appId: "1:29656954550:web:e4c3deee3d3e78bdecd817",
  measurementId: "G-PV2L2ZFGWN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getMessaging(app);