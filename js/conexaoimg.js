// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Function to upload a file to Firebase Storage
function uploadFile(file) {
  const storage = getStorage(app);
  const storageRef = ref(storage, 'images/' + file.name);

  uploadBytes(storageRef, file).then(snapshot => {
    console.log('Uploaded a file:', snapshot.metadata.name);

    // Get the download URL of the uploaded file
    getDownloadURL(storageRef).then(downloadURL => {
      console.log('File available at', downloadURL);
    }).catch(error => {
      console.error('Error getting download URL:', error);
    });
  }).catch(error => {
    console.error('Error uploading file:', error);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById('fileInput');
  const uploadButton = document.getElementById('uploadButton');

  uploadButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
      uploadFile(file);
    }
  });
});