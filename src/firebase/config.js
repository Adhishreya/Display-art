// import * as firebase from "firebase/app";
import firebase from "firebase";
import "firebase/storage"; //to store images
import "firebase/firestore";
// var firebase = require("firebase/app");
var firebaseConfig = {
  apiKey: "AIzaSyA1cyQNPXcxBpvyZmnElvFludzHNf81AEE",
  authDomain: "art-gallery-b03bf.firebaseapp.com",
  projectId: "art-gallery-b03bf",
  storageBucket: "art-gallery-b03bf.appspot.com",
  messagingSenderId: "587050036528",
  appId: "1:587050036528:web:2b978c2e59afd4c8e7ecf5"
};
firebase.initializeApp(firebaseConfig); //to connect backend and frontend
//to initialize storage service
const projStorage = firebase.storage();
const projFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
//exporting the services
export { projStorage, projFireStore, timestamp };
