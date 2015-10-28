var ExtractTextPlugin = require("extract-text-webpack-plugin");

var lessLoaders = [
  "css-loader",
  "less-loader",
];

module.exports = {
  context: __dirname + "/app",
  entry: [
    "./index.js",
    "./index.html",
  ],

  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },

  resolve: {
    modulesDirectories: ["node_modules", "lib"]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", lessLoaders.join("!")),
      },
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }

    ],
  },

  plugins: [
    new ExtractTextPlugin("[name].css"),
  ],

};
