const merge = require("webpack-merge");
const baseWPConf = require("./webpack.base.config");
const buildWPConf = merge(baseWPConf, {
  mode: "production"
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWPConf);
});
