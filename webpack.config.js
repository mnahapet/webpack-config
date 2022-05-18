require('colors');
const path = require('path');
let target = 'web';
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

if (process.env.NODE_ENV === 'production') {
  target = 'browserslist';
}

console.log(`webpack is running on ${mode} mode`.cyan);

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional setting, this will reference .babelrc
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true
    // port: 9000
  },
  mode,
  target
};
