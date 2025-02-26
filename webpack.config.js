const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// .env.local 파일에서 환경 변수 로드
const env = dotenv.config({ path: ".env.local" }).parsed;

const definePlugin = new webpack.DefinePlugin({
  "process.env": {
    REACT_APP_API_KEY: JSON.stringify(env.REACT_APP_API_KEY || ""), // 기본값 설정
  },
});

module.exports = {
  mode: "development",
  entry: { index: "./src/index.tsx", app: "./src/App.tsx" },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
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
        use: ["style-loader", "css-loader", "postcss-loader"],
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
  plugins: [definePlugin],
};
