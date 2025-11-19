// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOV-ykmgk8kl8QvRLXjvg8k4rRg8efTSE",
  authDomain: "unibrilink-app.firebaseapp.com",
  projectId: "unibrilink-app",
  storageBucket: "unibrilink-app.firebasestorage.app",
  messagingSenderId: "114284669090",
  appId: "1:114284669090:web:b8a871fbf3afd26295cffb",
  measurementId: "G-9NQE0SL234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
