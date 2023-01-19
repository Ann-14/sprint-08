
import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAvMFMH87L6XSkcgyeJWazVJz2oTiDdUNE",
    authDomain: "auth-development-87187.firebaseapp.com",
    projectId: "auth-development-87187",
    storageBucket: "auth-development-87187.appspot.com",
    messagingSenderId: "154195590012",
    appId: "1:154195590012:web:dcd9ba224d8e9c76a2c2f9"
  };

 const app = initializeApp(firebaseConfig)

 export const auth = getAuth()
export default app