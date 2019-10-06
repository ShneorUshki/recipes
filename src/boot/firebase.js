import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALdtyD7aQqGCVD8y6pNIn70WBXgMmVhZ8",
  authDomain: "recipes-c59b5.firebaseapp.com",
  databaseURL: "https://recipes-c59b5.firebaseio.com",
  projectId: "recipes-c59b5",
  storageBucket: "",
  messagingSenderId: "65516780580",
  appId: "1:65516780580:web:66391e000e1820aa20acb1",
  measurementId: "G-JN0W9BJSD1"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

/* firebase.analytics(); */

export { firebaseAuth, firebaseDb };
