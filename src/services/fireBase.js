import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnRmcWVAgOUvppGXn9Eg7WX8HUizd5ynQ",
  authDomain: "notetaking-app-2e9cc.firebaseapp.com",
  projectId: "notetaking-app-2e9cc",
  storageBucket: "notetaking-app-2e9cc.firebasestorage.app",
  messagingSenderId: "816806742544",
  appId: "1:816806742544:web:df49bfe012303b530c1895",
  measurementId: "G-1ZB37LYYYZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
