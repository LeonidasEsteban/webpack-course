const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  name: 'DLL',
  entry: {
    modules: [
      'react',
      'react-dom',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/dll/[name].js',
    publicPath: path.resolve(__dirname, 'dist'),
    library: '[name]',
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        // exclude: /(node_modules)/,
        use: {
          loader: 'json-loader',
        }
      },
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json"),
    })
  ]
}
