const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const tinyPngWebpackPlugin = require('tinypng-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    invie: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    // publicPath: path.resolve(__dirname, 'dist')+"/",
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  // devServer: {
  //   // contentBase: path.join(__dirname, "dist"),
  //   // compress: true,
  //   port: 9000,
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              fallback: 'file-loader',
              name: "images/[name].[hash].[ext]",
            }
          }
        ]
      }
    ]
  }
}
