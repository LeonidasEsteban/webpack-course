const path = require('path');
const nib = require('nib');
const rupture = require('rupture');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localIdentName: '[name]__[local]___[hash:base64:5]',
              // use: [
              //   nib(),
              //   rupture(),
              // ],
              // import: [
              //   // path.join(__dirname, 'assets/v2/stylus/modules/vars.styl'),
              //   // path.join(__dirname, 'assets/v2/stylus/modules/mixins.styl'),
              //   '~nib/lib/nib/index.styl',
              //   '~rupture/rupture/index.styl',
              // ],
              // compress: true,
            }
          },
          'stylus-loader'
        ]
      }
    ]
  }
}
