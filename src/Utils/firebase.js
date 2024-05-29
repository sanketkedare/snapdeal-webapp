import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLkrxMhTBFuL3-TjFy5pVIGVMNr9SuqfY",
  authDomain: "snapdeal-webapp.firebaseapp.com",
  projectId: "snapdeal-webapp",
  storageBucket: "snapdeal-webapp.appspot.com",
  messagingSenderId: "1004044689881",
  appId: "1:1004044689881:web:84a07a52ce5cbeaed579c8",
  databaseURL: 'https://console.firebase.google.com/project/snapdeal-webapp/database/snapdeal-webapp-default-rtdb/data/~2F'
};

const app = initializeApp(firebaseConfig);

export default app;