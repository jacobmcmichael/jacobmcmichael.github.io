const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/src": path.resolve(__dirname, "./src/"),
        "@/styles": path.resolve(__dirname, "./src/styles/"),
        "@/components": path.resolve(__dirname, "./src/components/"),
        "@/layouts": path.resolve(__dirname, "./src/layouts/"),
        "@/sections": path.resolve(__dirname, "./src/sections/"),
      },
    },
  });
};
