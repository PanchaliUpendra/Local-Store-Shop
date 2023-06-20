import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpfzz8FJu1QXcWBK-h6NReCoNbtJ90NmM",
  authDomain: "fir-frontend-c6d17.firebaseapp.com",
  projectId: "fir-frontend-c6d17",
  storageBucket: "fir-frontend-c6d17.appspot.com",
  messagingSenderId: "372944267373",
  appId: "1:372944267373:web:557f0b305d91e4021df764"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);