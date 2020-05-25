const path = require("path");

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
        target: "<url>",
        pathRewrite: { "^/api": "" }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@api", resolve("src/assets/request/api"));
  }
};
