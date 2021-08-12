import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCboOp3hcl16hcDEbkwK_tRAPo-8F4vRBY",
  authDomain: "crwn-clothings-4.firebaseapp.com",
  projectId: "crwn-clothings-4",
  storageBucket: "crwn-clothings-4.appspot.com",
  messagingSenderId: "401464458607",
  appId: "1:401464458607:web:2f74c8364a450aca4efc9a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Store user profile to database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

// Sign In With Google
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
