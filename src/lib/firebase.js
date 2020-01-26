import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCO3cVS-l13pFHkFms4aydxEEESabbKx0A",
    authDomain: "qwerhacks-d355f.firebaseapp.com",
    databaseURL: "https://qwerhacks-d355f.firebaseio.com",
    projectId: "qwerhacks-d355f",
    storageBucket: "qwerhacks-d355f.appspot.com",
    messagingSenderId: "664515396454",
    appId: "1:664515396454:web:c22e42c67dd983e3c5fea7"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;