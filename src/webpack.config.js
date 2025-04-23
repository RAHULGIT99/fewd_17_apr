const webpack = require("webpack");

module.exports = {
  resolve: {
    fallback: {
      "child_process": false,
      "crypto": require.resolve("crypto-browserify"),
      "fs": false
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser"
    })
  ]
};
