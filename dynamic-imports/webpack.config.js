const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    // vendor: ["react"],
    home: path.resolve(__dirname, 'src/js/index.js'),
    // contact: path.resolve(__dirname, 'src/js/contact.js'),
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
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        use: ExtractTextPlugin.extract({
          // fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.styl$/,
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        use: ExtractTextPlugin.extract({
          // fallback: "style-loader",
          use: [
            "css-loader",
            // "stylus-loader"
            {
              loader: 'stylus-loader',
              options: {
                use: [
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl'
                ],
                compress: true,
              },
            },
          ]
        })
      },
      {
        test: /\.less$/,
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        use: ExtractTextPlugin.extract({
          // fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: 'less-loader',
              options: {
                // strictMath: true,
                noIeCompat: true
              }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.json$/,
        // exclude: /(node_modules)/,
        use: {
          loader: 'json-loader',
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
