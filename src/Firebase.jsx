
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBKAkuCSaURiZ31pMn49hE1ASDtA6nQg_g",
    authDomain: "portfoliovite.firebaseapp.com",
    projectId: "portfoliovite",
    storageBucket: "portfoliovite.appspot.com",
    messagingSenderId: "738283112562",
    appId: "1:738283112562:web:5ed6af9a0620df24a35aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)