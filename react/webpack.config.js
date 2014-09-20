'use strict';

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass?' +
                                'includePaths[]=' +
                                __dirname + '/src'},
      {test: /\.(js|jsx)$/, loader: 'jsx-loader?harmony'}
    ]
  }
};
