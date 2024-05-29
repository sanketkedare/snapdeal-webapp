import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCBE8qiXCEpqafPS-L0j7lY0-1ewhn-Nk0",
    authDomain: "snapdeal-clone-bbaf7.firebaseapp.com",
    projectId: "snapdeal-clone-bbaf7",
    storageBucket: "snapdeal-clone-bbaf7.appspot.com",
    messagingSenderId: "790565265541",
    appId: "1:790565265541:web:072e0187beedca34eb09ec",
    databaseURL: "https://console.firebase.google.com/project/snapdeal-clone-bbaf7/database/snapdeal-clone-bbaf7-default-rtdb/data/~2F"
  };

const app = initializeApp(firebaseConfig);

export default app;