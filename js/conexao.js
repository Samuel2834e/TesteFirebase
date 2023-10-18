// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default function conectar (){
  const firebaseConfig = {

    apiKey: "AIzaSyBQDAlWLRWqIminvg6HYN47qoqm_pOfAZc",

    authDomain: "samuelonly-7015f.firebaseapp.com",

    projectId: "samuelonly-7015f",

    storageBucket: "samuelonly-7015f.appspot.com",

    messagingSenderId: "700335054516",

    appId: "1:700335054516:web:6f07f89e2055c25e9a41e1",

    measurementId: "G-LC91JC2BBB"

  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}