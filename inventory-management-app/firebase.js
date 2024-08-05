// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ-u2zW-u8cy0K8bOGqiiYh--KK08nGVo",
  authDomain: "inventory-management-app-963d7.firebaseapp.com",
  projectId: "inventory-management-app-963d7",
  storageBucket: "inventory-management-app-963d7.appspot.com",
  messagingSenderId: "621330580672",
  appId: "1:621330580672:web:1bd0db71e2c0c71f93d925",
  measurementId: "G-RX5YR82TD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };