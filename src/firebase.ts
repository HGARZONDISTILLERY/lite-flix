// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from '@firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPB2qVnWkn4MNK7AGxWOCumPEPTfWEaM8",
  authDomain: "liteflix-b2515.firebaseapp.com",
  projectId: "liteflix-b2515",
  storageBucket: "liteflix-b2515.appspot.com",
  messagingSenderId: "922195742511",
  appId: "1:922195742511:web:b9fe567dce742f3c395bda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
