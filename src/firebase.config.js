import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuaBIEWiRRuGztfFxF574Y5PFzEGXoG1w",

  authDomain: "fooddeliveryapp-66449.firebaseapp.com",

  databaseURL: "https://fooddeliveryapp-66449-default-rtdb.firebaseio.com",

  projectId: "fooddeliveryapp-66449",

  storageBucket: "fooddeliveryapp-66449.appspot.com",

  messagingSenderId: "336268197944",

  appId: "1:336268197944:web:086b4f6dbd60e5c35c66cd",

  measurementId: "G-ZYK1JE0167",
};

// Initialize Firebase

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
