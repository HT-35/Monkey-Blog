import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoEcayS02VXHwn5sKCHW2iQJXb2aj9SSk",
  authDomain: "monkey-bloggin-47add.firebaseapp.com",
  projectId: "monkey-bloggin-47add",
  storageBucket: "monkey-bloggin-47add.appspot.com",
  messagingSenderId: "423272761775",
  appId: "1:423272761775:web:b0eacee73dd6cd85b4c75a",
  measurementId: "G-9HS23W9VVY",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
