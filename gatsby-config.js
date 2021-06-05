module.exports = {
  siteMetadata: {
    title: `Little Yacht studio`,
    description: `A Food and Product Photograher based in Eindhoven, The Netherlands.`,
    author: `iamjimmyqian`,
    siteName: `Little Yacht studio`,
    siteUrl: `https://littleyacht.studio/`,
    twitterTitle: `Little Yacht studio`,
    twitterUrl: `https://littleyacht.studio/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Little Yacht studio`,
        short_name: `LYS.`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icons/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "2524393047775746",
      },
    },
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
    // Soo Tea
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `soo-tea`,
        path: `${__dirname}/src/images/soo-tea`,
      },
    },
    // Good Tea Stories
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tea-stories`,
        path: `${__dirname}/src/images/tea-stories`,
      },
    },
    // CHUN Amsterdam
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chun`,
        path: `${__dirname}/src/images/chun`,
      },
    },
    // TSH Eindhoven
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tsh-eindhoven`,
        path: `${__dirname}/src/images/tsh-eindhoven`,
      },
    },
    // Rustic Pastry shop
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rustic`,
        path: `${__dirname}/src/images/rustic`,
      },
    },
    // Sushiholic
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sushiholic`,
        path: `${__dirname}/src/images/sushiholic`,
      },
    },
    // car
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Car`,
        path: `${__dirname}/src/images/car`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `showcase-pages`,
        path: `${__dirname}/src/showcase-markdown`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
