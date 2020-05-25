import firebase from 'firebase';
import { FIREBASE_CONFIG } from './config';
import { IS_SERVER } from '../constants';

let app = {};

if (!IS_SERVER) {
  firebase.initializeApp(FIREBASE_CONFIG);

  const db = firebase.database();
  const storage = firebase.storage().ref();
  const firestore = firebase.firestore();
  const auth = firebase.auth();

  app = {
    db,
    storage,
    firestore,
    firebase,
    auth,
  };
}

export default {
  db: () => {},
  storage: () => {},
  firestore: () => {},
  firebase: () => {},
  ...app,
};
