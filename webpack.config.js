var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(jpe?g|png)$/,
      loader: 'file-loader'
    }
    ]
  }
};
