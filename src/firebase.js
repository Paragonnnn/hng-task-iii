// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOjylBqCk0QU5t1cAGPWBQ5ztuHNIlfNY",
  authDomain: "image-gallery-ba320.firebaseapp.com",
  projectId: "image-gallery-ba320",
  storageBucket: "image-gallery-ba320.appspot.com",
  messagingSenderId: "422119793260",
  appId: "1:422119793260:web:0de779c3a1b2e56b43ae49",
  measurementId: "G-D6PWPZN6KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
