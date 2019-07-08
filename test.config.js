const path = require("path");
module.exports = {
  module: {
    rules: [
      // 单个loader配置
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, "loader/a-loader.js"),
            options: {
              //
            }
          }
        ]
      },
    //   多个loader的配置
      {
        test: /.css$/,
        use: [
          {
            loader: path.resolve(__dirname, "loader/a-loader.js"),
            options: {
            }
          },
          {
            loader: path.resolve(__dirname, "loader/b-loader.js"),
            options: {
            }
          }
        ]
      }
    ]
  },
  resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'resolve')],
  }
};
