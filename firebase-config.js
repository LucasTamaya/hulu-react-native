import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_API_KEY } from "@env";

const firebaseConfig = {
  apiKey: `${FIREBASE_API_KEY}`,
  authDomain: "hulu-react-native-7fa34.firebaseapp.com",
  projectId: "hulu-react-native-7fa34",
  storageBucket: "hulu-react-native-7fa34.appspot.com",
  messagingSenderId: "212869354551",
  appId: "1:212869354551:web:653d04171aeb9b7226dbb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
