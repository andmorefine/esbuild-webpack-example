const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  // これを定義しないと import 文で拡張子を書く必要が生まれる。
  // フロントエンドの開発では拡張子を省略することが多いので、
  // 記載したほうがトラブルに巻き込まれにくい。
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      fs: false,
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
    },
  },
  plugins: [
    new Dotenv()
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.js",
  },
};
