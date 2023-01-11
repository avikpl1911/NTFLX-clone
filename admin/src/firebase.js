import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBGItmr_9fuwm7zXBrtX9bGOA3Lsk1zdjU",
    authDomain: "netflix-da31e.firebaseapp.com",
    projectId: "netflix-da31e",
    storageBucket: "netflix-da31e.appspot.com",
    messagingSenderId: "1095442520997",
    appId: "1:1095442520997:web:56d1d9339975fe1933a64c",
    measurementId: "G-FMX6KFD2TM"
  };

firebase.initializeApp(firebaseConfig);
const storage =firebase.storage();
export default storage;