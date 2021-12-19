import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import { getDownloadURL } from "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRpK5rxCLNamr6p9E3LUwSD8aOjYpSbrQ",
  authDomain: "removethisnft.firebaseapp.com",
  projectId: "removethisnft",
  storageBucket: "removethisnft.appspot.com",
  messagingSenderId: "700121516046",
  appId: "1:700121516046:web:53ea038100614744c4d45f",
  measurementId: "G-M4PQDMT4QM",
};

export const app = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export { getDownloadURL };
