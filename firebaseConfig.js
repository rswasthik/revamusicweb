import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfnswqAwE5zjzLR5RZvflL4R7CNw0GeZA",
  authDomain: "revadhwani-39f6c.firebaseapp.com",
  databaseURL: "https://revadhwani-39f6c-default-rtdb.firebaseio.com",
  projectId: "revadhwani-39f6c",
  storageBucket: "revadhwani-39f6c.appspot.com",
  messagingSenderId: "361345624447",
  appId: "1:361345624447:web:5d5fcd2ccdde700a0b124a",
  measurementId: "G-1NV9VKN6M8",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
//wait one sec
//import these page into NodeNextRequest.js
//   huhu
