// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMqEsinp_315lc4UjBrVxrHK743el0nIw",
  authDomain: "newapp-4d12f.firebaseapp.com",
  projectId: "newapp-4d12f",
  storageBucket: "newapp-4d12f.appspot.com",
  messagingSenderId: "1098718484131",
  appId: "1:1098718484131:web:6747b5b701aff21e8e9116",
  measurementId: "G-EE6SB8GC62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export {auth,db}
