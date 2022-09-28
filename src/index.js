import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAEUQBFMyQ2Ls6LXkMyjAoBLQL1_r6TUA",
  authDomain: "coderhouse-react-js-thedoctorl.firebaseapp.com",
  projectId: "coderhouse-react-js-thedoctorl",
  storageBucket: "coderhouse-react-js-thedoctorl.appspot.com",
  messagingSenderId: "143071808996",
  appId: "1:143071808996:web:6c34ee9d60418ba6bc0bf1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
