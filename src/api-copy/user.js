import app from '../firebase/app';
import { fetchAds } from './ad';

const { firestore: db, auth, storage } = app;

// export async function fetchUserPreferences(uid) {
//   let userRef = db.collection('users').doc(uid);
//   try {
//     const doc = await userRef.get();
//     if (!doc.exists) {
//       console.log('No such document!');
//     } else {
//       return doc.data();
//     }
//   } catch (e) {
//     console.log('---- fetchUserPreferences error: ', e);
//   }
// }

export const fetchUsers = async () => {
  const result = {};
  try {
    const snapshot = await db.collection('users').get();
    snapshot.forEach(doc => {
      result[doc.id] = doc.data();
    });
  } catch (e) {
    console.log('---- fetch Ads error: ', e);
  }

  console.log('--fetched Ads: ', result);
  return result;
};

export async function fetchUserProfile(uid) {
  let userRef = db.collection('users').doc(uid);
  try {
    const doc = await userRef.get();
    if (!doc.exists) {
      return false;
      console.log('No such User exist!');
    } else {
      return doc.data();
    }
  } catch (e) {
    console.log('---- fetchUserPreferences error: ', e);
  }
}

export async function createUserProfile(data) {
  let userRef = db.collection('users').doc(data.uid);
  try {
    await userRef.set(data);
  } catch (e) {
    console.log('---- fetchUserPreferences error: ', e);
  }
}

export async function updateUserProfile(data) {
  let userRef = db.collection('users').doc(data.uid);
  try {
    return await userRef.update(data);
  } catch (e) {
    console.log('---- fetchUserPreferences error: ', e);
  }
}

export const updateProfilePicture = async (uid, image) => {
  if (!uid || !image) return;

  const userRef = db.collection('users').doc(uid);

  let uploadedImage = null;

  const handleImageUpload = (image, resolve, reject) => {
    //const fileName = new Date().getTime();
    const imageRef = storage.child(`images/${uid}/profilePicture`);
    imageRef.put(image).then(
      snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          uploadedImage = downloadURL;
          resolve();
        });
      },
      error => reject(error),
    );
  };

  return new Promise((resolve, reject) => {
    handleImageUpload(image, resolve, reject);
  })
    .then(() => {
      return userRef.update({
        profileImage: uploadedImage,
      });
    })
    .catch(e => {
      console.error(e);
      return e;
    });
};

export const addUserPermission = async ({ uid, permission }) => {
  debugger;
  try {
    const permRef = db.collection('permissions').doc(uid);
    debugger;
    const perm = await permRef.get();
    if (!perm.exists) {
      // permission will come in a format { admin: true }
      debugger;
      permRef.set(permission);
    } else {
      debugger;
      permRef.update(permission);
    }
  } catch (e) {
    throw ('addUserPermission error: ', e.toString());
  }
};

export async function fetchUserPermissions(uid) {
  debugger;
  let permRef = db.collection('permissions').doc(uid);
  debugger;
  try {
    const doc = await permRef.get();
    if (!doc.exists) {
      return false;
      console.log('permissions for User does not exist!');
    } else {
      return { uid, data: doc.data() };
    }
  } catch (e) {
    console.log('---- fetchUserPreferences error: ', e);
  }
}

export const deleteUser = async id => {
  try {
    await db
      .collection('users')
      .doc(id)
      .delete();
    return Promise.resolve('ok');
  } catch (e) {
    return Promise.reject(`error: ${e}`);
    console.log('---- delete user error: ', e);
  }
};

export const logout = () => auth.signOut();
