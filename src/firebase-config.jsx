
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyADpO3AKfzANnBlQOKySnkXCbZt3HT8c5c",
  authDomain: "megamart-60a8c.firebaseapp.com",
  projectId: "megamart-60a8c",
  storageBucket: "megamart-60a8c.firebasestorage.app",
  messagingSenderId: "1040054425503",
  appId: "1:1040054425503:web:2e58c79884962d9f338faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app