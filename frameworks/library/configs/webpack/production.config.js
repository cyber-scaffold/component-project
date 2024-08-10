const { merge } = require("webpack-merge");

const { webpackBasicConfig } = require("./basic.config");


exports.webpackProductionConfig = merge(webpackBasicConfig, {
  mode: "development"
});