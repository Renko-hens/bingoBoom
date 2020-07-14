const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
}

module.exports = {
  entry : `./src/index.js`,
  module: {
    rules: [{
      // loader для скриптов
      test: /\.js$/,
      loader: "babel-loader",
      exclude: '/node_modules/'
    },

    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: __dirname + '/../dist/css/',
          }
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            sourceMap: true,
            url: false,
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    },

    {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    },

    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    }
    ]
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].css`
    }),
    new HtmlWebpackPlugin ({
      hash: false,
      template: `./src/index.html`,
      filename: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `./src/img` , to: `./img` },
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `./src/fonts` , to: `./fonts` },
      ]
    })
  ],
  output: {
    filename: `js/[name].js`,
    path: path.join(__dirname, 'dist'),
  },
}
