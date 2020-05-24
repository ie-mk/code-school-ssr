const path = require('path');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const projectRoot = path.join(__dirname);
const MONACO_DIR = path.resolve(__dirname, '../node_modules/monaco-editor');

module.exports = withFonts({
  distDir: '../.next',
  env: {
    useMockData: process.env.NODE_ENV === 'useMock',
  },
  webpack(config) {
    const alias = config.resolve.alias;
    alias['components'] = path.join(projectRoot, 'components');
    alias['foundation'] = path.join(projectRoot, 'components/foundation');
    alias['modules'] = path.join(projectRoot, 'modules');
    alias['store'] = path.join(projectRoot, 'store');
    // alias['apiPath'] = path.join(projectRoot, '../api/api');
    alias['apiPath'] = path.join(projectRoot, './api/api.min');

    config.plugins.push(
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: ['json'],
      }),
    );
    config.module.rules[2] = {
      test: /\.css$/,
      include: MONACO_DIR,
      use: ['style-loader', 'css-loader'],
    };
    config.module.rules.push({
      test: /\.ttf$/,
      include: MONACO_DIR,
      use: [
        {
          loader: 'ttf-loader',
          options: {
            name: './font/[hash].[ext]',
          },
        },
      ],
    });

    console.log('webpack -> config.module.rules', config.module.rules);
    console.log('########################################');
    console.log('########################################');

    return config;
  },
});
