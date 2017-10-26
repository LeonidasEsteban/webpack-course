const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    invie: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: path.resolve(__dirname, 'dist')+"/",
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   // use: [
      //   //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
      //   //   { loader: "css-loader" }, // interpreta los archivos css en js via import
      //   // ]
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      {
        test: /\.css$/,
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        use: ExtractTextPlugin.extract({
          // fallback: "style-loader",
          use: [
            // "css-loader",
            {
              loader: 'css-loader',
              // options: {
              //   modules: true,
              //   importLoaders: 1
              // }
            },
            // 'postcss-loader'
          ]
        })
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
        test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.DllReferencePlugin({
    //   manifest: require('./modules-manifest.json'),
    // }),
    new ExtractTextPlugin("css/[name].css")
  ]
}
