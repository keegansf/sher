import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBKQuNK7rDAji28ecig2M0YOBoQXywhCe8",
  authDomain: "sher-db.firebaseapp.com",
  databaseURL: "https://sher-db.firebaseio.com",
  projectId: "sher-db",
  storageBucket: "sher-db.appspot.com",
  messagingSenderId: "215495696299",
  appId: "1:215495696299:web:3d9398891628f0a8b2fcee"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
