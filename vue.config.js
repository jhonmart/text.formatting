module.exports = {
  publicPath: "./",
  outputDir: "docs",
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Text Formatting";
      return args;
    });
  }
};
