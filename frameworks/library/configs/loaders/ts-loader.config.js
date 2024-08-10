const path = require("path");

exports.TSLoaderConfig = {
  test: /\.(ts|tsx)$/,
  exclude: /(node_modules)/,
  use: [{
    loader: "ts-loader",
    options: {
      configFile: path.resolve(process.cwd(), "./tsconfig.json")
    }
  }]
};