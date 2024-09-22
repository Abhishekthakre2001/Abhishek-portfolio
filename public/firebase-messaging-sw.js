// Import Firebase scripts required for messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBTCtQO_-mJ_WdsyRKBRHQzs7x5GLKqo8E",
  authDomain: "abhishek-3ebea.firebaseapp.com",
  projectId: "abhishek-3ebea",
  storageBucket: "abhishek-3ebea.appspot.com",
  messagingSenderId: "29656954550",
  appId: "1:29656954550:web:e4c3deee3d3e78bdecd817",
  measurementId: "G-PV2L2ZFGWN"
};

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);

// Initialize messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  // Destructure notification details from the payload
  const { title, body, image } = payload.notification;

  // Notification options
  const notificationOptions = {
    body: body || "You have a new message.",
    icon: image || "/default-icon.png", // Provide a default icon if none is present
  };

  // Show the notification
  self.registration.showNotification(title || "Notification", notificationOptions)
    .then(() => console.log("Notification displayed successfully."))
    .catch(err => console.error("Notification display error: ", err));
});
