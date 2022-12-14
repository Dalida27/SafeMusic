// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBwhi8eJGrsAauYFBrqQGKxXlRr60V1AkE",
  authDomain: "react-shop-1cd17.firebaseapp.com",
  projectId: "react-shop-1cd17",
  storageBucket: "react-shop-1cd17.appspot.com",
  messagingSenderId: "669409380964",
  appId: "1:669409380964:web:bd044bcc8dbc2d04e12d71",
  measurementId: "G-36YJ1CVPE5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
