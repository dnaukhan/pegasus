// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuaEMC0lR7HBcl-UxpyhD3XDR6vZsGk94",
  authDomain: "pegasus-11861.firebaseapp.com",
  projectId: "pegasus-11861",
  storageBucket: "pegasus-11861.appspot.com",
  messagingSenderId: "53261882114",
  appId: "1:53261882114:web:a8f28d38efbcccfc34e81b",
  measurementId: "G-F0QXWLZD4G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
