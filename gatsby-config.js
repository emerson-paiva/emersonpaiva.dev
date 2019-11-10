require('dotenv').config();

const queries = require('./src/utils/algolia_queries');

module.exports = {
  siteMetadata: {
    title: `Emerson Paiva`,
    position: `Desenvolvedor Front End`,
    description: `Minhas ideias pra esse blog? Ainda estou pensando nelas.`,
    author: `@emerpaiva`,
    siteUrl: `https://emersonpaiva.dev`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: `uploads`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-151733357-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emerson Paiva`,
        short_name: `Emerson Paiva`,
        start_url: `/`,
        background_color: `#6d01a5`,
        theme_color: `#6d01a5`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
