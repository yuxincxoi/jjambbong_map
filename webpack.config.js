const path = require("path");

module.exports = {
  mode: "production", // 또는 "develop"
  entry: "./src/app.tsx",
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/, // 타스인지 확인할거야
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx", ".css"],
  },
};
