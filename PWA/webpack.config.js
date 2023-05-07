const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
entry: './src/index.js',
output: {
path: path.join(process.cwd(), 'dist'),
filename: 'bendle.js'
},
module: {
    rules: [
      {
        test: /\.css$|\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader','sass-loader'],
      },
    ],
  },

plugins: [new HtmlWebpackPlugin({
title: 'Webpack Basic Examples',
inject: 'body',
template: './src/index.html',
templateParameters: {
    myDamsel: 'our header text'
}
})],
}