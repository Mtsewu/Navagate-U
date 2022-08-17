const initializeApp = require("firebase/app");

// import { initializeApp } from "firebase/app";
const getAnalytics = require("firebase/analytics")
// import { getAnalytics } from "firebase/analytics");
// import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtsZ53A8HQU8Wv8ruzwvz1TYTHqbAcM-k",
    authDomain: "navagate-u.firebaseapp.com",
    projectId: "navagate-u",
    storageBucket: "navagate-u.appspot.com",
    messagingSenderId: "894860391117",
    appId: "1:894860391117:web:7b53ccd3d5c6cb77c3af84",
    measurementId: "G-05X2HZQWPR"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth =  firebase.auth();
function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
}

//signIN function
function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
}
