import path from 'path';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import nextApp from 'next';

const firebase = admin.initializeApp();

const dev = process.env.NODE_ENV !== 'production';

const app = nextApp({
  dev,
  conf: {
    distDir: `${path.relative(process.cwd(), __dirname)}/next`,
  },
});

const handle = app.getRequestHandler();

export const next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested

  return app.prepare().then(() => handle(req, res));
});

export const deletePhotos = functions.firestore
  .document('ads/{adId}')
  .onDelete((snap, context) => {
    const { adId } = context.params;
    const bucket = firebase.storage().bucket();

    return bucket.deleteFiles({
      prefix: `images/${adId}`,
    });
  });
