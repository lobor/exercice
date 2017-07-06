const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist')
  },
	devtool: "cheap-eval-source-map",
	devServer: {
		publicPath: '/',
		hot: true,
	  contentBase: path.join(__dirname, "dist"),
	  compress: true,
	  port: 9000
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
