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
      filename: 'application.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/, // compile javascript files
          include: [
            path.resolve(__dirname, 'src')
          ],
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i, // compile scss files
          include: [
            path.resolve(__dirname, 'src/assets'),
            path.resolve(__dirname, 'src/scss/assets')
          ],
          use: {
            loader: 'file-loader?name=assets/[fullhash].[ext]',
            options: {
              outputPath: 'assets',
              esModule: false
            }
          }
        },
        {
          test: /\.pug$/, // compile .pug templates
          include: [
            path.resolve(__dirname, 'src')
          ],
          use: {
            loader: 'pug-loader'
          }
        }
      ]
    },
    resolve: {
      modules: [
        path.resolve('./src'),
        'node_modules'
      ],
      alias: { // make vue global accesible
        'vue$': 'vue/dist/vue.esm-bundler'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        API_HOST: JSON.stringify(process.env.API_HOST) || "'http://localhost:3000'",
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_I18N_FULL_INSTALL__: false,
        __VUE_I18N_LEGACY_API__: true,
        __VUE_I18N_PROD_DEVTOOLS__: false,
        __INTLIFY_PROD_DEVTOOLS__: false
      }),
      new HtmlWebpackPLugin({ // compile index.ejs and inject js
        template: 'src/index.ejs',
        favicon: 'src/assets/favicon.ico'
      }),
      new webpack.ProvidePlugin({
        Vue: 'vue',
        axios: 'axios'
      })
    ],
    devtool: 'source-map'
  };

  // Entorno de Desarrollo
  if (env.development) {
    config.output.path = path.resolve(__dirname, 'dev');

    config.module.rules.push({
      test: /\.scss$/, // compile scss files
      include: [
        path.resolve(__dirname, 'src/scss')
      ],
      use: ['style-loader', 'css-loader', 'sass-loader']
    });

    config.devServer = {
      allowedHosts: 'all',
      port: process.env.PORT || 8000,
      static: {
        directory: path.join(__dirname, 'dev')
      }
    };

    config.plugins.push(new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dev']
    }));
  }
  // Entorno de Producción
  else {
    config.output.path = path.resolve(__dirname, 'dist');
    config.output.filename = 'application.[chunkhash].js';

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
    config.plugins.push(new MiniCssExtractPlugin({filename: 'application.[chunkhash].css'}));
  }

  return config;
};
