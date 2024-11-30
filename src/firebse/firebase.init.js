// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIps-xpmy7xL3WiwhlWy90NWcEvcelAcQ",
  authDomain: "coffee-store-4bee4.firebaseapp.com",
  projectId: "coffee-store-4bee4",
  storageBucket: "coffee-store-4bee4.firebasestorage.app",
  messagingSenderId: "743257114672",
  appId: "1:743257114672:web:36d720530d7c44efca05f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);