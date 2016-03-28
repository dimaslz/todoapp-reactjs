var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var projectConfig = {
  context: path.resolve('src/app'),
  assetsPath: __dirname + '/dist/'
}


var config = {
  context: projectConfig.context,
  entry: './app.js',
  output: {
    path: projectConfig.assetsPath,
    assetsPath: __dirname + '/dist/',
    filename: './js/bundle.js'
  },

  devtool: 'eval',

  plugins: [
    new ExtractTextPlugin('./css/styles.css'),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3000,
      server: { baseDir: [__dirname + '/dist'] }
    },
    {
      // prevent BrowserSync from reloading the page 
      // and let Webpack Dev Server take care of this 
      // reload: false
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015','react']}},
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass'),
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=/res/[name].[ext]?[hash]'
      }
    ]
  }
};

module.exports = config;
