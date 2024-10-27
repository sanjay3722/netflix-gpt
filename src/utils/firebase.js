// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALxRbzptoieVg_BzfgtvXtb4RrPLD_NaU",
  authDomain: "fir-988e3.firebaseapp.com",
  projectId: "fir-988e3",
  storageBucket: "fir-988e3.appspot.com",
  messagingSenderId: "948879760230",
  appId: "1:948879760230:web:48df7cfa37ea28cff9c6a7",
  measurementId: "G-F4LNLZ7C3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
