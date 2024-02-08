// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5KD_3iqpVAeIl2EGF55vvzC_ONHb6AK0",             // Replace with your API key
  authDomain: "pioneer-hours.firebaseapp.com",     // Replace with your Auth Domain
  databaseURL: "https://pioneer-hours-default-rtdb.europe-west1.firebasedatabase.app/",   // Replace with your Database URL
  projectId: "pioneer-hours",       // Replace with your Project ID
  storageBucket: "pioneer-hours.appspot.com", // Replace with your Storage Bucket
  messagingSenderId: "341266514623", // Replace with your Messaging Sender ID
  appId: "1:341266514623:web:b61e25f3c6bdf1e0317c0a"                // Replace with your App ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get instances for Firebase services
const auth = getAuth(app);
const database = getDatabase(app);

// Export the necessary functionalities
export { auth, database, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, ref, onValue, set, push };
