import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAmRAoelXPRdsdbpfokLDjeWqx63L8lu9M",
  authDomain: "crown-db-bb1a1.firebaseapp.com",
  databaseURL: "https://crown-db-bb1a1.firebaseio.com",
  projectId: "crown-db-bb1a1",
  storageBucket: "crown-db-bb1a1.appspot.com",
  messagingSenderId: "79696216176",
  appId: "1:79696216176:web:a0486eb8c488487091b4b5",
  measurementId: "G-Z841VPMYBM"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
