var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  cache: false,
  entry: "./test/main.jsx",
  output: {
    path: "./test",
    publicPath: "/",
    filename: "build.js",
    sourceMapFilename: "[file].map"
  },
  resolveLoader: { root: path.join(__dirname, "node_modules") },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel', query: {
        stage: 0,
        jsxPragma: 'elt'
      }}
    ]
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({minimize: true})
  // ]
}
