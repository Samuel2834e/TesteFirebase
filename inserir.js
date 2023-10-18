// Import the functions you need from the SDKs you need
import conectar from './conexao.js';

import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

import  conectar from './conexao.js';
document.addEventListener("DOMContentLoaded", function () {
    
    conectar();

    function uploadFile(file) {
        const storage = getStorage();
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
      
      // Call the uploadFile function when a file is selected
      const fileInput = document.getElementById('fileInput');
      fileInput.addEventListener('change', event => {
        const file = event.target.files[0];
        if (file) {
          uploadFile(file);
        }
      });

});
