const path = require("path");
const { fork } = require("child_process");

/**
 * 启动一个线程
 * 用于编译组件库的脚本文件
 * **/
const compileScriptFilePath = path.resolve(__dirname, "./library/development.js");
const compileProcess = fork(compileScriptFilePath);

/**
 * 启动一个线程
 * 启动样例的开发预览服务
 * **/
const exampleScriptFilePath = path.resolve(__dirname, "./example/development.js");
const exampleProcess = fork(exampleScriptFilePath);

