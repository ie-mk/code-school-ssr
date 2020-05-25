let app;

if (process.env.NODE_ENV === 'build') {
  app = require('./api');
} else {
  app = require('./api.min.js');
}

export default app;
