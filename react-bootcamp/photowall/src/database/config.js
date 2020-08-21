import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBJJj8bilB7gZmVJ6A4FBbTKZjqdKHBTfA",
    authDomain: "photowall-7968d.firebaseapp.com",
    databaseURL: "https://photowall-7968d.firebaseio.com",
    projectId: "photowall-7968d",
    storageBucket: "photowall-7968d.appspot.com",
    messagingSenderId: "1051832673945",
    appId: "1:1051832673945:web:61236194e839c1b1197a08"
  };

firebase.initializeApp(firebaseConfig)


const database = firebase.database

export {database}