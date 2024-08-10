const path = require("path");
const nodeExternals = require("webpack-node-externals");

const { TSLoaderConfig } = require("../loaders/ts-loader.config");
const { LessLoaderConfig } = require("../loaders/less-loader.config");
const { ScssLoaderConfig } = require("../loaders/scss-loader.config");

const { matchEveryScriptFile } = require("../../../utils/matchEveryScriptFile");

exports.webpackBasicConfig = {
  context: path.resolve(process.cwd(), "./src/"),
  /**
   * @description entry支持Promise的写法,具体可以参考这个文档,支持Promise就可以进行复杂的操作
   * @see https://webpack.docschina.org/configuration/entry-context/#dynamic-entry
   * **/
  entry() {
    return matchEveryScriptFile();
  },
  output: {
    clean: true,
    libraryTarget: "commonjs-module",
    path: path.resolve(process.cwd(), "./dist/"),
    filename: "[name].js",
  },
  /**
   * 打包成node-package的情况下不需要引入node_modules里的依赖
   * 需要使用这个工具把相关的依赖排除掉,只打包核心代码
   * **/
  externals: [nodeExternals({
    modulesDir: [path.resolve(process.cwd(), "./src/")],
    modulesFromFile: path.resolve(process.cwd(), "./package.json")
  })],
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(process.cwd(), "./src/"),
      "@@": process.cwd(),
    }
  },
  module: {
    rules: [
      TSLoaderConfig,
      LessLoaderConfig,
      ScssLoaderConfig
    ]
  }
};