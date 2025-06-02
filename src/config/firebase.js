import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNIgJkC0mRymrhryPRK8wixJ3ZInV4fOM",
  authDomain: "react-tp-mau.firebaseapp.com",
  projectId: "react-tp-mau",
  storageBucket: "react-tp-mau.firebasestorage.app",
  messagingSenderId: "487801500950",
  appId: "1:487801500950:web:0b9ffad1e65ebc20864c37"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database