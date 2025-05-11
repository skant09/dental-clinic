// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLLvS5RUqbcOh8GKMY2ZADEb0sjnOjnTE",
  authDomain: "dental-clinic-3fdaa.firebaseapp.com",
  projectId: "dental-clinic-3fdaa",
  storageBucket: "dental-clinic-3fdaa.firebasestorage.app",
  messagingSenderId: "856990542306",
  appId: "1:856990542306:web:1b7a13dfe52017fc9571bb",
  measurementId: "G-VMF10NFFEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    