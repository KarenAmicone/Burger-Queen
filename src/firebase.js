import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoUPgV5kV644hqEtyy72M-r4Spb77INnw",
  authDomain: "burger-queen-3c206.firebaseapp.com",
  databaseURL: "https://burger-queen-3c206.firebaseio.com",
  projectId: "burger-queen-3c206",
  storageBucket: "burger-queen-3c206.appspot.com",
  messagingSenderId: "113645595393",
  appId: "1:113645595393:web:8b3c1846dac80302",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
