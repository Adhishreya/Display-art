// import * as firebase from "firebase/app";
import firebase from "firebase";
import "firebase/storage"; //to store images
import "firebase/firestore";
// var firebase = require("firebase/app");
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
firebase.initializeApp(firebaseConfig); //to connect backend and frontend
//to initialize storage service
const projStorage = firebase.storage();
const projFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
//exporting the services
export { projStorage, projFireStore, timestamp };
