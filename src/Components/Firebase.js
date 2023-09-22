import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBj9DCmkQcrCFdFGfEwpuyYa1FY3vBJflE",
  authDomain: "resq-2c764.firebaseapp.com",
  projectId: "resq-2c764",
  storageBucket: "resq-2c764.appspot.com",
  messagingSenderId: "100837270435",
  appId: "1:100837270435:web:28bf93eeeedf11e2f1f016",
  measurementId: "G-JJGXT0MPFQ"
};

// Initialize Firebase
const firebaseDB = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default firebaseDB.database().ref();