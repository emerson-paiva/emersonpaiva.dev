module.exports = {
  siteMetadata: {
    title: `Emerson Paiva`,
    jobTitle: `Desenvolvedor Front End — Cinéfilo — Indie Rock.`,
    description: `Seja muito bem vindo(a) ao meu blog! Aqui eu vou compartilhar um pouco do conhecimento adquirido na minha jornada como desenvolvedor Front End!`,
    author: `@oemersonpaiva`,
    findMe: {
      linkedin: 'oemersonpaiva',
      github: 'oemersonpaiva',
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
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              // Optional:

              // the github handler whose gists are to be accessed
              username: 'oemersonpaiva',

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              // DEPRECATED (PLEASE USE gistDefaultCssInclude)
              // includeDefaultCss: true || false,

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              gistDefaultCssInclude: true,

              // a flag indicating whether the github default gist css should be preloaded or not
              // use this if you want to load the default css asynchronously.
              // default: false
              gistCssPreload: true,

              // a string that represents the github default gist css url.
              // defaults: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
              // gistCssUrlAddress: '<string>',
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 560,
              quality: 80,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emerson Paiva`,
        short_name: `Emerson Paiva`,
        start_url: `/`,
        background_color: `#794bc4`,
        theme_color: `#794bc4`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-151733357-1',
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
