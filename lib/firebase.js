import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDe9KMUDdkyDMdi2FfmyKalThFHfNHHs0s",
  authDomain: "officequizapp.firebaseapp.com",
  databaseURL: "https://officequizapp-default-rtdb.firebaseio.com",
  projectId: "officequizapp",
  storageBucket: "officequizapp.appspot.com",
  messagingSenderId: "351779148118",
  appId: "1:351779148118:web:ab1a7217edb7eb39b986f7"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();