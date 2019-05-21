import firebase from 'firebase/app'
import 'firebase/storage'


  var firebaseConfig = {
    apiKey: "AIzaSyAM2AebeclAiK6v8cKd5Ah57wL1BSd1gxA",
    authDomain: "nettles.firebaseapp.com",
    databaseURL: "https://nettles.firebaseio.com",
    projectId: "nettles",
    storageBucket: "nettles.appspot.com",
    messagingSenderId: "364326160130",
    appId: "1:364326160130:web:94caf6d60003a27e"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }
