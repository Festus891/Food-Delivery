import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSMlAz-q89YGivfrOret3vs3LM5yaL--k",
  authDomain: "food-delivey-app-603cd.firebaseapp.com",
  databaseURL: "https://food-delivey-app-603cd-default-rtdb.firebaseio.com",
  projectId: "food-delivey-app-603cd",
  storageBucket: "food-delivey-app-603cd.appspot.com",
  messagingSenderId: "113562096188",
  appId: "1:113562096188:web:34f9936891c2a8e3f66939",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
