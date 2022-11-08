import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCG4SaPIGeLd_l2b8X-FZeq3BRcF6gPENE",
    authDomain: "test-4c6d7.firebaseapp.com",
    projectId: "test-4c6d7",
    storageBucket: "test-4c6d7.appspot.com",
    messagingSenderId: "511054909675",
    appId: "1:511054909675:web:f5703fa3fcfbe550c76eae",
    measurementId: "G-CXL4VEQ6LW"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase }; 