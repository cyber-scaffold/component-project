

exports.LessLoaderConfig = {
  test: /\.(less)$/,
  exclude: /(node_modules)/,
  use: [{
    loader: "css-loader",
    options: {
      modules: {
        exportOnlyLocals: false,
        mode: (resourcePath) => {
          if (/\.(module)/.test(resourcePath)) {
            return "local";
          }
          if (/(node_modules)/.test(resourcePath)) {
            return "global";
          };
          return "global";
        }
      },
      sourceMap: true
    }
  }, {
    loader: "less-loader",
    options: {
      lessOptions: {
        strictMath: true,
      },
    },
  }]
};