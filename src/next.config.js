const path = require('path');
const withSASS = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const projectRoot = path.join(__dirname);

const config = {
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
};

module.exports = withBundleAnalyzer(withCSS(withSASS(config)));
