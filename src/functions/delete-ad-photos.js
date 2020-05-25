import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const firebase = admin.initializeApp();

export const deletePhotos = functions.firestore
  .document('ads/{adId}')
  .onDelete((snap, context) => {
    const { adId } = context.params;
    const bucket = firebase.storage().bucket();

    return bucket.deleteFiles({
      prefix: `images/${adId}`,
    });
  });
