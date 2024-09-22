// firebase.js

import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

// Optional: Handle foreground messages
onMessage(messaging, (payload) => {
  console.log("Received foreground message: ", payload);
  // You can display a custom notification here or use the Notification API directly
});

// Export the necessary functionalities
export { app, messaging };
