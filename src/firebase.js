// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4DYX0FrOsp_YAFFc_MCdnIycUZhuV--k",
  authDomain: "bank-8a106.firebaseapp.com",
  projectId: "bank-8a106",
  storageBucket: "bank-8a106.firebasestorage.app",
  messagingSenderId: "992977194776",
  appId: "1:992977194776:web:a6a6ffeff561e2740a186d",
  measurementId: "G-KF2YXCNFJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Optionally, initialize Firebase Analytics (if you need it)
const analytics = getAnalytics(app);

export { auth };
