const { merge } = require("webpack-merge");

const { webpackBasicConfig } = require("./basic.config");


exports.webpackDevelopmentConfig = merge(webpackBasicConfig, {
  mode: "development"
});