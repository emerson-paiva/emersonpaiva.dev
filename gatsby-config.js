module.exports = {
  siteMetadata: {
    title: `Emerson Paiva`,
    jobTitle: `Desenvolvedor Front End — Pseudo Cinéfilo — Indie Rock.`,
    description: `Desenvolvedor Front End — Pseudo Cinéfilo — Indie Rock.`,
    author: `@indie_astronaut`,
    findMe: {
      linkedin: 'emerpaiva',
      github: 'emerpaiva',
    },
    siteUrl: `https://emersonpaiva.dev`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: `${__dirname}/src`,
        pages: `${__dirname}/src/pages`,
        components: `${__dirname}/src/components`,
        images: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
