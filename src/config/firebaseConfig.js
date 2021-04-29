import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD50XIkAU8FlEi5xfQZQSiJusIhtxhz5uo",
    authDomain: "todo-app-44b6c.firebaseapp.com",
    projectId: "todo-app-44b6c",
    storageBucket: "todo-app-44b6c.appspot.com",
    messagingSenderId: "162192773125",
    appId: "1:162192773125:web:ae9ba1c75ccbc95c960c6c"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.firestore()

  export default firebase;