require('colors');
const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
console.log(`webpack is running on ${mode} mode`.cyan);

module.exports = {
  module: {
    rules: [
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

  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist')
    // port: 9000
  },
  mode
};
