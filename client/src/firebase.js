import * as firebase from "firebase/app";
import "firebase/auth";
require("dotenv").config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyBxd127xKUC3vkklsuuJRJltwloQt7rnVM",
  authDomain: "codepro-51b19.firebaseapp.com",
  databaseURL: "https://codepro-51b19.firebaseio.com",
  projectId: "codepro-51b19",
  storageBucket: "codepro-51b19.appspot.com",
  messagingSenderId: "987733651609",
  appId: "1:987733651609:web:e16d92f493db5e1d700808",
  measurementId: "G-CZBMPYRJEW",
});

export default app;
