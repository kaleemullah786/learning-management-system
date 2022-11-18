
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyb1O-mUAUce9JMcTE40V7l0dNygRnrEA",
  authDomain: "lms-auth-cf3e8.firebaseapp.com",
  projectId: "lms-auth-cf3e8",
  storageBucket: "lms-auth-cf3e8.appspot.com",
  messagingSenderId: "225228096868",
  appId: "1:225228096868:web:feb25662cee089e4e42671",
  measurementId: "G-7HXN4RQMBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app;