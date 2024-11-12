// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5lc9pp4S8B3MGyjd3mluCBJ9tQcWP1Dk",
  authDomain: "netflixgpt-cb74c.firebaseapp.com",
  projectId: "netflixgpt-cb74c",
  storageBucket: "netflixgpt-cb74c.firebasestorage.app",
  messagingSenderId: "841573064852",
  appId: "1:841573064852:web:b811eeae5afddb0ebe9481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();