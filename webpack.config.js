const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const { CheckerPlugin } = require("awesome-typescript-loader");

const Root = path.resolve(__dirname);

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: `${Root}/dist`,
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].bundle.map.js"
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.ts[x]?$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(sa | sc)ss$/,
        include: `${Root}/src`,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.png/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 20
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".png"],
    alias: {
      "@": `${Root}/src`
    }
  },
  plugins: [new CheckerPlugin()]
};
