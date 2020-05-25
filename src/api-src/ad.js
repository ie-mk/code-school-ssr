import app from '../firebase/app';

const { storage, firestore, auth, firebase } = app;

export const fetchAds = async () => {
  const result = {};
  try {
    const query = firestore.collection('ads').where('published', '==', true);
    // .where('bathrooms', '==', 2)
    // .where('amenities.ac', '==', true);

    const snapshot = await query.get();

    snapshot.forEach(doc => {
      result[doc.id] = doc.data();
    });
  } catch (e) {
    console.log('---- fetch Ads error: ', e);
  }

  console.log('--fetched Ads: ', result);
  return result;
};

export const fetchAd = async docId => {
  try {
    const docRef = firestore.collection('ads').doc(docId);
    const doc = await docRef.get();

    if (doc.exists) {
      return doc.data();
    } else {
      console.log('No such document!');
    }
  } catch (e) {
    console.log('---- fetch Ad error: ', e);
  }
};

export const fetchUserAds = async uid => {
  const result = {};
  try {
    const snapshot = await firestore
      .collection('ads')
      .where('ownerId', '==', uid)
      .get();

    snapshot.forEach(doc => {
      result[doc.id] = doc.data();
    });
  } catch (e) {
    console.log('---- fetch Ads error: ', e);
  }

  return Promise.resolve(result);
};

export const deleteAd = async id => {
  try {
    await firestore
      .collection('ads')
      .doc(id)
      .delete();
    fetchAds();
  } catch (e) {
    console.log('---- delete Ad error: ', e);
  }
};

export const storageUploadImages = (adId, images) => {
  const uid = auth.currentUser.uid;

  if (!images.length) return Promise.resolve([]);

  const uploadedImages = [];

  const handleImageUpload = (image, resolve, reject) => {
    const fileName = new Date().getTime();
    const imageRef = storage.child(`images/${adId}/${uid}/${fileName}`);
    imageRef.put(image).then(
      () => {
        imageRef.getDownloadURL().then(downloadURL => {
          uploadedImages.push(downloadURL);
          resolve();
        });
      },
      error => reject(error),
    );
  };

  const promiseList = Object.keys(images).map(key => {
    const image = images[key];

    return new Promise((resolve, reject) => {
      handleImageUpload(image, resolve, reject);
    });
  });

  return Promise.all(promiseList)
    .then(() => {
      return uploadedImages;
    })
    .catch(e => console.error(e));
};

const deleteImageOnStorage = async imgUrl => {
  if (!imgUrl) return;

  const urlWithoutMediaQuery = imgUrl.split('?')[0];
  let urlSplitted = urlWithoutMediaQuery.split('images');
  const url = urlSplitted[1].replace(/%2F/g, '/');
  const refUrl = `images${url}`;

  try {
    const imageRef = storage.child(refUrl);
    await imageRef.delete();
    return Promise.Resolve('delete success');
  } catch (e) {
    return Promise.resolve('image delete error: ', e);
  }
};

export const updateAdImages = async ({ adId, images }) => {
  const uploadedOnStorage = await storageUploadImages(adId, images);

  try {
    const adRef = firestore.collection('ads').doc(adId);
    await adRef.update({
      images: firebase.firestore.FieldValue.arrayUnion(...uploadedOnStorage),
    });

    return Promise.resolve('ok');
  } catch (e) {
    console.log('updateAdImages error: ', e);
  }
};

export const deleteAdImage = async ({ adId, imgUrl }) => {
  try {
    await deleteImageOnStorage(imgUrl);

    const adRef = firestore.collection('ads').doc(adId);
    await adRef.update({
      images: firebase.firestore.FieldValue.arrayRemove(imgUrl),
    });
    return Promise.resolve('ok');
  } catch (e) {
    console.log('delete image error: ', e);
  }
};

export const updateAd = async ({ adId, data }) => {
  try {
    const adRef = firestore.collection('ads').doc(adId);

    await adRef.update(data);

    return Promise.resolve('ok');
  } catch (e) {
    console.error('updateAd error: ', e);
  }
};

export const createAd = async data => {
  if (!Object.keys(data).length) return;

  try {
    const collectionRef = firestore.collection('ads').doc();
    const adId = collectionRef.id;

    const images = data.images;

    if (images && images.length) {
      delete data.images;
      data.images = await storageUploadImages(adId, images);
      await collectionRef.set(data);
    } else {
      await collectionRef.set(data);
    }
    return adId;
  } catch (e) {
    console.error('createAd error', e);
  }
};

export const createAdFromJson = async data => {
  if (!Object.keys(data).length) return;

  try {
    const collectionRef = firestore.collection('ads').doc();
    collectionRef.set(data);
  } catch (e) {
    console.log('---createAdFromJson error: ', e);
  }
};

export default {
  createAd,
};
