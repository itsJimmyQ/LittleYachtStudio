module.exports = {
  siteMetadata: {
    title: `Little Yacht studio`,
    description: `A portrait & interior photography studio based in Eindhoven, The Netherlands.`,
    author: `Longxiang Qian`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-thumbnail`,
        path: `${__dirname}/src/images/thumbnail`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-portrait`,
        path: `${__dirname}/src/images/portrait`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-urban`,
        path: `${__dirname}/src/images/urban`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-event`,
        path: `${__dirname}/src/images/event`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
