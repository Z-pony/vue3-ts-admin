const path = require("path");
const Webpack = require("webpack");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  devServer: { port: 9090 },
  productionSourceMap: false, // 关闭生产环境的sourcemap
  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@": resolve("src")
        }
      }
    };
  }
};
