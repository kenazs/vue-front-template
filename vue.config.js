var path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  assetsDir: "dist",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@components", resolve("src/components"))
      .set("@mixins", resolve("src/components/mixins"))
      .set("@filters", resolve("src/filters"))
      .set("@plugins", resolve("src/plugins"))
      .set("@router", resolve("src/router"))
      .set("@state", resolve("src/state"))
      .set("@styles", resolve("src/styles"))
      .set("@views", resolve("src/views"))
      .set("@layouts", resolve("src/views/layouts"));
  },
  transpileDependencies: [/\bvue-awesome\b/]
};
