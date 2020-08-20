const path = require('path');
const withCSS = require('@zeit/next-css');

const projectRoot = path.join(__dirname);

// // to make react-smooshpack/CodeMirror to work
// global.navigator = {
//   platform: 'Win32',
//   userAgent:
//     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36',
// };

module.exports = withCSS({
  distDir: '../_next',
  env: {
    useMockData: process.env.NODE_ENV === 'useMock',
  },
  webpack(config) {
    const alias = config.resolve.alias;
    alias['components'] = path.join(projectRoot, 'components');
    alias['foundation'] = path.join(projectRoot, 'components/foundation');
    alias['modules'] = path.join(projectRoot, 'modules');
    alias['store'] = path.join(projectRoot, 'store');
    alias['constants'] = path.join(projectRoot, '/constants');

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
});
