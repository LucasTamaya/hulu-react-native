// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4RuLCtCHnoFMkd4tviPexzdL5Ocrps6o",
  authDomain: "hulu-react-native-7fa34.firebaseapp.com",
  projectId: "hulu-react-native-7fa34",
  storageBucket: "hulu-react-native-7fa34.appspot.com",
  messagingSenderId: "212869354551",
  appId: "1:212869354551:web:653d04171aeb9b7226dbb2",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
