import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu6JUJUUJYt6lckmvFDNy_mRqI24Dpacc",
  authDomain: "house-marketplace-app-b5945.firebaseapp.com",
  projectId: "house-marketplace-app-b5945",
  storageBucket: "house-marketplace-app-b5945.appspot.com",
  messagingSenderId: "63335137089",
  appId: "1:63335137089:web:810445678d03b0addb2bc0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore