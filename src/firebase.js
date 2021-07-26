import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUfVh8Xk8JQQN9_Bws7zAxC70_qaf-NBw",
  authDomain: "facebook-messenger-clone-94491.firebaseapp.com",
  projectId: "facebook-messenger-clone-94491",
  storageBucket: "facebook-messenger-clone-94491.appspot.com",
  messagingSenderId: "859020990478",
  appId: "1:859020990478:web:692f377d6bfe9fad2b045f"
});

const db = firebaseApp.firestore();

export default db;