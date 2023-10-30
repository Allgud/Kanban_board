import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOiZaaPY0xv95IHftsl7TLvp-skvU7Yfo",
  authDomain: "oxy-group-flowboard.firebaseapp.com",
  projectId: "oxy-group-flowboard",
  storageBucket: "oxy-group-flowboard.appspot.com",
  messagingSenderId: "123163948510",
  appId: "1:123163948510:web:5c17f59114eef88bee594f",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);