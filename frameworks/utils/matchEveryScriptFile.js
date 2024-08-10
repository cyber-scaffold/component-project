const path = require("path");
const { glob } = require("glob");
const { fromPairs } = require("lodash");

/**
 * @description 用于匹配src文件夹下所有的ts和tsx文件,返回给webpack的entry,作为多入口
 * **/
exports.matchEveryScriptFile = async () => {
  const globMatchPattern = path.resolve(process.cwd(), "./src/**/*.tsx");
  const matchAllFilePathList = await glob(globMatchPattern);
  const basicPathName = path.resolve(process.cwd(), "./src/");
  const allFileRelativePathPairs = matchAllFilePathList.map((everyFileAbsolutePath) => {
    const relativePath = everyFileAbsolutePath.replace(basicPathName, "").replace(".tsx", "").replace(".ts", "");
    return [relativePath, everyFileAbsolutePath];
  });
  const entryObject = fromPairs(allFileRelativePathPairs);
  return entryObject;
};