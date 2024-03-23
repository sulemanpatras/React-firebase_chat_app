import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCdnYvFttR1BqzVl6NfwtxKoQeb8jlNhO0",
  authDomain: "chat-b59a5.firebaseapp.com",
  projectId: "chat-b59a5",
  storageBucket: "chat-b59a5.appspot.com",
  messagingSenderId: "991961298671",
  appId: "1:991961298671:web:c28f447a3c0fd48d630d1a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
