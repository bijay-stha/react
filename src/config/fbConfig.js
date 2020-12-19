import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase-storage";

var config = {
  apiKey: "AIzaSyCFkE8fiHd_AokBvArZyZcFU85uyuJqdEs",
  authDomain: "sewadev-f27b9.firebaseapp.com",
  databaseURL: "https://sewadev-f27b9.firebaseio.com",
  projectId: "sewadev-f27b9",
  storageBucket: "sewadev-f27b9.appspot.com",
  messagingSenderId: "721609079682",
  appId: "1:721609079682:web:8e762b36696ee99e80ed9b",
  measurementId: "G-7NW8NXXL8M",
};
firebase.initializeApp(config);

//const projectStorage = firebase.storage();

export default firebase;
