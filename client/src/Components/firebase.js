import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: "reminder-app-4be61",
    storageBucket: "reminder-app-4be61.appspot.com",
    messagingSenderId: "830815988398",
    appId: "1:830815988398:web:597257d987ea63668a9b3f",
    measurementId: "G-T600ZD0201"
}
firebase.initializeApp(config)


export default firebase