const path = require("path");

module.exports = {
  mode: "production", // 또는 "develop"
  entry: "./src/app.tsx",
  test: /\.(ts|tsx)$/,
  extensions: [".ts", ".js", "jsx", "tsx"],
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js|ts|tsx|jsx$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
