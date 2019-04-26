const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      { test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] 
      },
      // {
      //   test: /\.(png|svg|jpg|gif|ico)$/,
      //   use: ['file-loader']
      // },
      // {
      //   test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
      //   use: ['file-loader']
      // }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: './src',
    publicPath: '/',
    port: 5000,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  output: {
    publicPath: '/'
  }
};