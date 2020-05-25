const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const Dotenv = require('dotenv-webpack');
// const devServerProxyConfig = require('./src/dev-server-proxy-config');
// const devServerProxyConfigCI = require('./src/dev-server-proxy-config-ci');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

const { NODE_ENV, PORT, HOST, CI = false } = process.env;
const SRC = path.resolve(__dirname, 'src');
//const BUILD_API = NODE_ENV === 'build_api';
// const DEVAPI = process.env.DEVAPI === 'true';
const OUTPUT = path.resolve(__dirname, /*DEV || TEST ? 'public' :*/ 'dist-api');

module.exports = {
  mode: /*DEV ? 'development' :*/ 'production',
  //watch: DEV,
  // devtool: DEV || TEST ? 'cheap-module-source-map' : 'source-map',
  // cache: true,
  target: /*DEV || TEST ?*/ 'web' /*: 'node'*/,
  entry: {
    main: [`${SRC}/api/index.js`],
  },
  output: {
    path: OUTPUT,
    //publicPath: '/',
    filename: `api.min.js`,
    libraryTarget: 'commonjs2',
    //libraryExport: 'default',
    //exports bundle as a library so the package can be imported with
    // node commonjs
    //libraryTarget: /*DEV || TEST ? 'var' :*/ 'commonjs2',
  },
  optimization: {
    // we do not want to minimize as the build will be consumed as
    // a package in portal
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  // do not include node modules inside the bundle
  externals: [/*DEV || TEST ? '' :*/ nodeExternals()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      apiPath: NODE_ENV === 'build' ? `${SRC}/api/api` : `${SRC}/api/api.min`,
      //   shared: `${SRC}/shared`,
      //   opportunities: `${SRC}/modules/opportunities`,
      //   'borrower-pricing': `${SRC}/modules/opportunities/components/borrower-pricing`,
      //   'credit-grading': `${SRC}/modules/opportunities/components/credit-grading`,
      //   'detail-view': `${SRC}/modules/opportunities/components/detail-view`,
      //   'loan-pricing': `${SRC}/modules/opportunities/components/loan-pricing`,
      //   modals: `${SRC}/modules/opportunities/modals`,
      //   model: `${SRC}/modules/opportunities/model`,
      //   'range-slider': `${SRC}/modules/opportunities/components/range-slider`,
      //   'security-grading': `${SRC}/modules/opportunities/components/security-grading`,
      //   summary: `${SRC}/modules/opportunities/components/summary`,
    },
  },
  // devServer: {
  //   https: true,
  //   historyApiFallback: true,
  //   contentBase: OUTPUT,
  //   port: PORT || '4300',
  //   host: HOST || 'localhost',
  //   proxy: CI ? devServerProxyConfigCI : devServerProxyConfig,
  // },
  // node: {
  //   console: false,
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  // },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                { targets: { browsers: 'last 1 chrome version' } }, // or whatever your project requires
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { loose: true }],
            ].filter(Boolean),
          },
        },
      },
      // {
      //   test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
      //   use: ['url-loader'],
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         // you can specify a publicPath here
      //         // by default it uses publicPath in webpackOptions.output
      //         hmr: DEV,
      //       },
      //     },
      //     'css-loader',
      //   ],
      // },
    ],
  },
  plugins: [
    // new Dotenv({
    //   path: DEV ? '.env.development' : TEST ? '.env.e2e' : '.env.production', // load this now instead of the ones in '.env'
    // }),
    //new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'${process.env.NODE_ENV}'`,
      },
    }),
    // new HtmlWebpackPlugin({
    //   template: `${SRC}/index.html`,
    //   filename: 'index.html',
    //   inject: 'body',
    // }),
    //prints more readable module names in the browser console on HMR updates
    // causes WARNING: This problem is likely caused by another plugin injecting
    // "_default" without registering it in the scope tracker
    // so disabling it for now
    // new webpack.NamedModulesPlugin(),
    //new ForkTsCheckerWebpackPlugin(),
  ],
};
