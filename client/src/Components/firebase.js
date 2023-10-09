import {initializeApp} from 'firebase/app'
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {getFirestore, collection, addDoc} from 'firebase/firestore'
import env from 'react-dotenv'

var config = {
    apiKey: env.REACT_APP_FIREBASE_API_KEY,
    authDomain: env.REACT_APP_AUTH_DOMAIN,
    databaseURL: env.REACT_APP_DB_URL,
    projectId: "reminder-app-4be61",
    storageBucket: "reminder-app-4be61.appspot.com",
    messagingSenderId: "830815988398",
    appId: "1:830815988398:web:597257d987ea63668a9b3f",
    measurementId: "G-T600ZD0201"
}
const fb = initializeApp(config)
const auth = getAuth(fb)
const db = getFirestore(fb)

export {
    signOut, 
    auth, 
    db, 
    collection, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    addDoc
}
    