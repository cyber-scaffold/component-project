const webpack = require("webpack");

const { webpackDevelopmentConfig } = require("./configs/webpack/development.config");

const compiler = webpack(webpackDevelopmentConfig);

compiler.watch({}, (error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stats.toString({ colors: true }));
  };
});