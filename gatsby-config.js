const path = require("path");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Jacob McMichael",
    siteUrl: "https://www.jacobmcmichael.github.io",
    description:
      "I'm a web developer passionate about crafting digital experiences that captivate users and drive growth. With expertise in e-commerce, web design, data analysis, and marketing strategy, I blend creativity and technical skills to drive client success and customer engagement.",
    author: "Jacob McMichael",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jacob McMichael",
        short_name: "Jake",
        start_url: "/",
        background_color: "#121212",
        theme_color: "#121212",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
