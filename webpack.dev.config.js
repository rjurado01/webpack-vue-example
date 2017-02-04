var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPLugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: 'build',
    filename: 'application.js'
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
        test: /\.(jpe?g|png|gif|svg|woff|ttf|eot)$/i, // compile scss files
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
        loaders: ["style-loader", "css-loader", "sass-loader"]
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
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPLugin({ // compile index.ejs and inject js
      template: "src/index.ejs"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Vue: "vue"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 8000
  }
};
