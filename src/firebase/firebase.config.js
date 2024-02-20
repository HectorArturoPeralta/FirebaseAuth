// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzfMdtKE6wHb4fQHInWKVdJmNHYwFEH7Y",
  authDomain: "coffendcode2.firebaseapp.com",
  projectId: "coffendcode2",
  storageBucket: "coffendcode2.appspot.com",
  messagingSenderId: "874231739064",
  appId: "1:874231739064:web:442edfd0b33cb64ab33a4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)