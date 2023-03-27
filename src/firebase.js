// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyC9xVJoNtXJaf0TU9LFEq0k0jqykT92pb8",
  
    authDomain: "netflix-clone-geny.firebaseapp.com",
  
    projectId: "netflix-clone-geny",
  
    storageBucket: "netflix-clone-geny.appspot.com",
  
    messagingSenderId: "686045912838",
  
    appId: "1:686045912838:web:4382e6cf65e8b99ee6c887"
  
  };
    
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
