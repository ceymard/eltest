var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  cache: true,
  entry: "./src/routes.js",
  output: {
    path: "./test",
    publicPath: "/",
    filename: "build.js",
    sourceMapFilename: "[file].map"
  },
  resolveLoader: { root: path.join(__dirname, "node_modules") },
  resolve: {extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]},
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css')},
      {test: /\.styl$/, loader: ExtractTextPlugin.extract('css!stylus')},
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'},
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
  ]
}
