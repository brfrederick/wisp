var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index',
  },

  output: {
    path: path.resolve('build'),
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2($|\?))$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.(otf|ttf|eot?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: './src/index.html'
    }),
    new ExtractText('[name].css')
  ],

  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
