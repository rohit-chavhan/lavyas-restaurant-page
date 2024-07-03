const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'src'),
    hot: true,
    port: 8300,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'lavyas restaturant webpage',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {},
};
