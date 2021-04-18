import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsV0jGhMGiqaKuQciAWmUYvf02VazdwQY",
    authDomain: "clone-e9425.firebaseapp.com",
    projectId: "clone-e9425",
    storageBucket: "clone-e9425.appspot.com",
    messagingSenderId: "522972319238",
    appId: "1:522972319238:web:542f4cb4d202dc78d57d87",
    measurementId: "G-EDLJFS5FKJ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};