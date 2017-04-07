const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = [
  {
    name: 'styles',
    entry: path.join(__dirname, 'assets', 'css', 'main.scss'),
    output: {
      path: path.join(__dirname, 'dist', 'static'),
      filename: 'styles.css',
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new CopyWebpackPlugin([
          { from: 'assets/font/*', to: 'font', flatten: true },
      ]),
    ],
  },
  {
    name: 'browser-js',
    entry: path.join(__dirname, 'browser.js'),
    output: {
      path: path.join(__dirname, 'dist', 'static'),
      filename: 'browser.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
  {
    name: 'server-js',
    target: 'node',
    entry: path.join(__dirname, 'server.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    plugins: [
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false,
      }),
    ],
    devtool: 'sourcemap',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: 'babel-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: 'eslint-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
];
