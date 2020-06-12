const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/",
  assetsDir: "static",
  lintOnSave: "error",
  devServer: {
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_URL,
        pathRewrite: { "^/api": "" }
      }
    }
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        // 打包去除console.log，debugger等
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: true
              // pure_funcs: ["console.log"] // 移除console
            }
          }
        })
      ]
    }
  },
  chainWebpack: config => {
    // 路径别名
    config.resolve.alias
      .set("@api", resolve("src/api"))
      .set("@img", resolve("src/assets/img"))
      .set("@css", resolve("src/css"))
      .set("@js", resolve("src/js"))
      .set("@views", resolve("src/views"))
      .set("@components", resolve("src/components"));
    // 配置图片打包为base64最小限制
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 20000 }));
  }
};
