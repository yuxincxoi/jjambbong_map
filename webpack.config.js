const path = require("path");

module.exports = {
  mode: "production", // 또는 "develop"
  entry: "./src/app.js",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
