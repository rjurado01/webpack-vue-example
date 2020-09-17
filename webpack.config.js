const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPLugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Entorno Base
module.exports = env => {
  config = {
    entry: './src/js/main.js',
    output: {
      filename: 'application.js',
      sourceMapFilename: 'application.map'
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/, // compile javascript files
          include: [
            path.resolve(__dirname, 'src')
          ],
          loader: 'babel-loader',
          query: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  safari: 10,
                  ie: 11,
                  chrome: 64,
                  firefox: 58
                },
                useBuiltIns: 'usage',
                "corejs": {version: 3}
              }]
            ]
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i, // compile assets
          include: [
            path.resolve(__dirname, 'src/assets'),
            path.resolve(__dirname, 'src/scss/assets'),
            path.resolve(__dirname, 'node_modules/element-ui/lib/theme-chalk/fonts'),
            path.resolve(__dirname, 'node_modules/jsoneditor/dist/img')
          ],
          loader: 'file-loader?name=assets/[hash].[ext]',
          options: {esModule: false}
        },
        {
          test: /\.pug$/, // compile .pug templates
          include: [
            path.resolve(__dirname, 'src')
          ],
          loader: 'pug-loader'
        }
      ]
    },
    resolve: {
      modules: [
        path.resolve('./src'),
        'node_modules'
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        API_HOST: JSON.stringify(process.env.API_HOST) || "'http://localhost:3000'"
      }),
      new HtmlWebpackPLugin({ // compile index.ejs and inject js
        template: 'src/index.ejs',
        favicon: 'src/assets/favicon.ico'
      }),
      new webpack.ProvidePlugin({
        Vue: 'vue',
        _: 'lodash',
        API: [path.resolve(__dirname, 'src/js/services/api.js'), 'default']
      })
    ],
    devtool: 'source-map'
  };

  // Entorno de Desarrollo
  if (env === 'development') {
    config.output.path = path.resolve(__dirname, 'dev');

    config.module.rules.push({
      test: /\.scss$/, // compile scss files
      include: [
        path.resolve(__dirname, 'src/scss')
      ],
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    });

    config.devServer = {
      disableHostCheck: true,
      contentBase: path.join(__dirname, 'dev'),
      port: process.env.PORT || 8000
    };

    config.plugins.push(new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dev']
    }));
  }
  // Entorno de Producción
  else {
    config.output.path = path.resolve(__dirname, 'dist');
    config.output.filename = 'application.[hash].js';

    config.module.rules.push({
      test: /\.scss$/, // compile scss files
      include: [
        path.resolve(__dirname, 'src/scss')
      ],
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    });

    config.plugins.push(new CleanWebpackPlugin());
    config.plugins.push(new MiniCssExtractPlugin({filename: 'application.[hash].css'}));
  }

  return config;
};
