const { join } = require('path');
const { https } = require('firebase-functions');
const { default: next } = require('next');

const isDev = process.env.NODE_ENV !== 'production';
const nextjsDistDir = join('src', require('./src/next.config.js').distDir);

const app = next({
  dev: isDev,
  conf: {
    distDir: nextjsDistDir,
  },
});

const nextjsHandle = app.getRequestHandler();

exports.nextjsFunc = https.onRequest((req, res) => {
  return app.prepare().then(() => nextjsHandle(req, res));
});
s;
