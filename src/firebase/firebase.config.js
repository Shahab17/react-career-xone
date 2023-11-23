 
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyDG3B2cvouzt7Fd9QoEgWdfQh4YXbHCQ8c",
  authDomain: "career-xone-auth.firebaseapp.com",
  projectId: "career-xone-auth",
  storageBucket: "career-xone-auth.appspot.com",
  messagingSenderId: "552233835692",
  appId: "1:552233835692:web:c83a1336d49523ad191309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;