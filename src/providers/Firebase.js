import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDQPWh18lMx2Z91WjV_O-ZP2Pwythl8x8I",
  authDomain: "symphony-5a87f.firebaseapp.com",
  projectId: "symphony-5a87f",
  storageBucket: "symphony-5a87f.appspot.com",
  messagingSenderId: "569969649358",
  appId: "1:569969649358:web:c487ecfd8340eb109f529f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export { db };
