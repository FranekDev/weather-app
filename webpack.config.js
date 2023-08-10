const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src', 'scss', 'main.scss')
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      insert: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'Weather App',
      favicon: 'dist/icon.png',
      chunks: ['main']
    }),
    new ESLintPlugin({
      failOnError: false,
      emitWarning: true
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
