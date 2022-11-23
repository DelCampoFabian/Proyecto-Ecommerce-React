import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyDtuFoMjKBkj-jpGuwEeSpceCNQWhjAjYE",
  authDomain: "react-45060.firebaseapp.com",
  projectId: "react-45060",
  storageBucket: "react-45060.appspot.com",
  messagingSenderId: "834438742879",
  appId: "1:834438742879:web:e8eb88cbab176ba1b2ecea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)