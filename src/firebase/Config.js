import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCaBUS8iYzVkEvrGhOZqATsU5SepkBFfno",
  authDomain: "loginform-1394b.firebaseapp.com",
  projectId: "loginform-1394b",
  storageBucket: "loginform-1394b.appspot.com",
  messagingSenderId: "197052441944",
  appId: "1:197052441944:web:bcde1b7b17962c1aa0312d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
