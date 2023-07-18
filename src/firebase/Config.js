import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCIIJf63R-u2yuXmIRgXClW2dUPdGFRfSc",
  authDomain: "react-auth-2017a.firebaseapp.com",
  projectId: "react-auth-2017a",
  storageBucket: "react-auth-2017a.appspot.com",
  messagingSenderId: "883134463693",
  appId: "1:883134463693:web:b2799a28ebe7d459427384"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };