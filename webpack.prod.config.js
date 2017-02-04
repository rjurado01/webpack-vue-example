var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPLugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: 'dist',
    filename: 'application.[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,  // compile javascript files
        exclude: /(node_modules|dist|build)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, // compile scss files
        include: /(src\/assets)/,
        loader: 'file-loader?name=assets/[hash].[ext]'
      },
      {
        test: /\.pug$/, // compile .pug templates
        exclude: /(node_modules|dist|build)/,
        loader: 'pug-loader'
      },
      {
        test: /\.scss$/, // compile scss files
        exclude: /(node_modules|dist|build)/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    alias: { // make vue global accesible
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPLugin({ // compile index.ejs and inject js
      template: "src/index.ejs"
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: true
    }),
    new ExtractTextPlugin("application.[chunkhash].css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Vue: "vue"
    })
  ]
};
