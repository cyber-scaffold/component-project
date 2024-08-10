const webpack = require("webpack");

const { webpackProductionConfig } = require("./configs/webpack/production.config");

const compiler = webpack(webpackProductionConfig);

compiler.run((error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stats.toString({ colors: true }));
  };
});