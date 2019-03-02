
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: ['./browser/src/react-redux/index.js'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.join(__dirname, 'browser/dist'),
    filename: 'scripts.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'browser/dist'),
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/': 'http://localhost:3000',
    },
    port: 3001,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([path.join(__dirname, 'browser/dist')]),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
    }),

  ],
};
