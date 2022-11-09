// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5oj8tcd7eOIH2VVThdQpmCUhC147_iyE",
  authDomain: "fir-auth-lms.firebaseapp.com",
  projectId: "fir-auth-lms",
  storageBucket: "fir-auth-lms.appspot.com",
  messagingSenderId: "616576683665",
  appId: "1:616576683665:web:796f7e9ceb07d066c5f930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
