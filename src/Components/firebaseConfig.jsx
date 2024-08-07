// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAVSRj4caacVmz5mOqmWAw9kvKrvHzsWms",
  authDomain: "edgecaseproject.firebaseapp.com",
  projectId: "edgecaseproject",
  storageBucket: "edgecaseproject.appspot.com",
  messagingSenderId: "1073348114990",
  appId: "1:1073348114990:web:e4ed37566b3c17b4c43dbf",
  measurementId: "G-VVFHCB3NBR"
};



const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app);

export const auth = getAuth(app);
export const dbFirestore = getFirestore(app);


export default app;