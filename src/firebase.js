import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fantasea-32030.firebaseapp.com",
  projectId: "fantasea-32030",
  storageBucket: "fantasea-32030.appspot.com",
  messagingSenderId: "904911690107",
  appId: "1:904911690107:web:29dd56d2b7ca9dccd6c5de",
  measurementId: "G-WCPF9VDVVX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);