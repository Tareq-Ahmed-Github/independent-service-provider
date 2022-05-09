// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcBRqpDalk5wwf7G_6IBg76dkyFLkRD1c",
  authDomain: "fitness-guru-b08ef.firebaseapp.com",
  projectId: "fitness-guru-b08ef",
  storageBucket: "fitness-guru-b08ef.appspot.com",
  messagingSenderId: "151514353962",
  appId: "1:151514353962:web:ebe906198b7b1504d40e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;