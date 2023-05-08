// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDV3fn0N9areX6Q4H8TKvqJYfRgwM5X56A',
    authDomain: 'react-hooks-blog-47d44.firebaseapp.com',
    projectId: 'react-hooks-blog-47d44',
    storageBucket: 'react-hooks-blog-47d44.appspot.com',
    messagingSenderId: '316564748041',
    appId: '1:316564748041:web:7650d08619c8e1397785d8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export db ;