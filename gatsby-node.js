const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/public": path.resolve(__dirname, "./public/"),
        "@/src": path.resolve(__dirname, "./src/"),
        "@/data": path.resolve(__dirname, "./src/data/"),
        "@/styles": path.resolve(__dirname, "./src/styles/"),
        "@/components": path.resolve(__dirname, "./src/components/"),
        "@/layouts": path.resolve(__dirname, "./src/layouts/"),
        "@/sections": path.resolve(__dirname, "./src/sections/"),
        "@/hooks": path.resolve(__dirname, "./src/hooks/"),
      },
    },
  });
};
