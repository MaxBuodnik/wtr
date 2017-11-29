const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpack = require('webpack');

const config = {
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080,
    overlay: true,
  },
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
       path.resolve(__dirname, "node_modules")
    ]),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      inject: false,  // required
      template: require('html-webpack-template'),
      appMountId: 'root',
      title: "WTR",
      meta: [
        {
          name: 'description',
          content: 'Very important page!'
        }
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  }
};

module.exports = config;