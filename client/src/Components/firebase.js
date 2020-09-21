import * as firebase from 'firebase/app'
import'firebase/auth'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyClBiN8PXmjbow5ed_Etur8i382y6BCn-I",
    authDomain: "reminder-app-4be61.firebaseapp.com",
    databaseURL: "https://reminder-app-4be61.firebaseio.com/",
    projectId: "reminder-app-4be61",
    storageBucket: "reminder-app-4be61.appspot.com",
    messagingSenderId: "830815988398",
    appId: "1:830815988398:web:597257d987ea63668a9b3f",
    measurementId: "G-T600ZD0201"
  }
  firebase.initializeApp(config)


  export default firebase