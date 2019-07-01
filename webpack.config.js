const fs = require("fs");
const webpack = require('webpack');
const path = require("path");

const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require('glob');

const Root = path.resolve(__dirname);
const devMode = process.env.NODE_ENV !== 'production';
const htmlPluginArray = [];

// 多入口文件配置
function getEntry() {
  const entry = {};
  glob.sync('./src/views/*/index.tsx').forEach(filePath => {
    console.log(filePath)
    let name = filePath.match(/\/views\/(.+)\/index.tsx/);
    name = name[1];
    entry[name] = filePath;

    // 实例化HtmlWebpackPlugin插件
    htmlPluginArray.push(new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true, // 折叠空白区域
        removeAttributeQuotes: true, // 移除双引号
      },
      filename: `${name}.html`,
      hash: true, // 消除缓存使用
      template: './src/tpl/'+ name +'.html', // 模板地址
      title: name,
      chunks: [`${name}`], // 生成的HTML页面引入不同的JS文件
    }));
  });
  return entry;
}

module.exports = {
  mode: "development", // 模式配置 development/production
  // entry: {
  //   // 入口文件配置
  //   main: "./src/index.tsx"
  // },
  entry: getEntry(),
  devtool: "source-map", // 开发工具，启动source-map
  output: {
    // 出口文件
    path: `${Root}/dist`, // 输出文件的绝对路径
    filename: "[name].bundle.js",
    chunkFilename: '[name].[chunkhash].js', // 非入口打包出的文件名称
    sourceMapFilename: "[name].bundle.map.js", // sourcemap映射文件
    publicPath: '/', // 文件静态资源的引用路径
  },
  devServer: {
    // 开发服务器相关配合
    open: true,
    inline: true,
    quiet: true,
    contentBase: `${Root}/dist/`,
    port: 9000,
    overlay: true, // 出错代码是否显示在页面上
    hot: true, // 热加载
    compress: true, // 服务器资源采用gzip压缩
    // historyApiFallback: true, // true默认打开HTML页面，false会出现一个目录，一会演示
  },
  module: {
    // 模块相关配置
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: `${Root}/src`
      },
      {
        test: /\.ts[x]?$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.ts[x]?$/,
        loader: "source-map-loader" // extracts source map from existing source files(from their sourceMappingURL)
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: `${Root}/src`,
        use: [
          devMode ? 'style-loader': MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // 给css-loader传入配置项
            options: {
              importLoaders: 2
            },
          },
          'postcss-loader', // 利用postcss中的autoprefixer来为css3自动添加前缀。
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // 加载图片资源
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 20, // 小于20K的图片自动转化为base64格式
              name: "images/[name].[ext]?[hash]", // 图片打包存放目录
              publicPath: "../" // css图片引用地址，可修正打包后，css图片引用出错的问题
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // 加载字体文件
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    // 解析模块的可选项
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": `${Root}/src`
    },
    modules: [path.resolve(__dirname, 'node_modules')], // 限制路径解析范围
  },
  plugins: [
    // 插件相关配置
    new CleanWebpackPlugin(),
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css': '[name].[contenthash].css', // contenthash 用来解决抽离css文件后，js文件的变化到时css文件的hash值发生变化
      chunkFilename: devMode ? '[id].css': '[id].[contenthash].css',
    }),
    // new HtmlWebpackPlugin({
    //   minify: {
    //     collapseWhitespace: true, // 折叠空白区域
    //     removeAttributeQuotes: true, // 移除双引号
    //   },
    //   hash: true, // 消除缓存使用
    //   template: './src/index.html', // 模板地址
    //   title: 'index',
    // }),
    ...htmlPluginArray,
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {}
};
