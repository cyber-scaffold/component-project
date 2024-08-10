const path = require("path");
const { webpack } = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { TSLoaderConfig } = require("./configs/loaders/ts-loader.config");
const { LessLoaderConfig } = require("./configs/loaders/less-loader.config");
const { ScssLoaderConfig } = require("./configs/loaders/scss-loader.config");

const webpackConfig = {
  mode: "development",
  context: path.resolve(process.cwd(), "./example/"),
  entry: path.resolve(process.cwd(), "./example/index.tsx"),
  output: {
    clean: true,
    path: path.resolve(process.cwd(), "./preview/"),
    filename: "[name].js",
  },
  devServer: {
    port: 5678,
    static: {
      directory: path.resolve(process.cwd(), "./preview/"),
    }
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(process.cwd(), "./example/"),
      "@@": process.cwd(),
    }
  },
  module: {
    rules: [
      TSLoaderConfig,
      LessLoaderConfig,
      ScssLoaderConfig
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "./example/index.html")
    })
  ]
};

/**
 * @description webpack-dev-server的开发文档请参考这里
 * @see https://webpack.js.org/api/webpack-dev-server/
 * **/
setImmediate(async () => {
  const compiler = webpack(webpackConfig);
  const webpackDevServer = new WebpackDevServer(webpackConfig.devServer, compiler);
  await webpackDevServer.start();
});

