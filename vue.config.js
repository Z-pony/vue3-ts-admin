const path = require("path");
const Webpack = require("webpack");
const WebpackBar = require("webpackbar");
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
      },
      plugins: [new WebpackBar()]
    };
  },
  chainWebpack(config) {
    config.when(process.env.NODE_ENV !== "development", config => {
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial"
          },
          elementUI: {
            name: "chunk-elementUI",
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/
          },
          fortawesome: {
            name: "chunk-fortawesome",
            priority: 20,
            test: /[\\/]node_modules[\\/]_?@fortawesome(.*)/
          }
        }
      });
    });
  }
};
