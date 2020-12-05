import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDq-fUnMs3XJJH4ZSFXVO9eJ4gUWNRQG0",
  authDomain: "slack-clone-fafa9.firebaseapp.com",
  projectId: "slack-clone-fafa9",
  storageBucket: "slack-clone-fafa9.appspot.com",
  messagingSenderId: "577775253557",
  appId: "1:577775253557:web:a93cb891a582a4b73f597c",
  measurementId: "G-NLZG92ZWM4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
