const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './app/index.js',
      output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
    module:{
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
         {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: process.env.PORT
    },
    plugins: [new HtmlWebpackPlugin({
         template: './app/index.html'
    }),
     new ExtractTextPlugin('style.css')
    ]
}