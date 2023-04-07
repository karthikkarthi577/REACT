import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQo33m14diPqsapb3hbMaA_nTrfaZCeVs",
  authDomain: "crudfirebase-d940d.firebaseapp.com",
  projectId: "crudfirebase-d940d",
  storageBucket: "crudfirebase-d940d.appspot.com",
  messagingSenderId: "8174357719",
  appId: "1:8174357719:web:1c2c5f59509cf1aabb3492",
  measurementId: "G-J4J4YSPFN2",
};

// Initialize Firebase
var firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb.database().ref()
