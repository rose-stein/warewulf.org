module.exports = {
  siteMetadata: {
    siteUrl: `https://warewulf.org`,
    title: `Warewulf`,
    description: `A stateless and diskless container operating system provisioning system for large clusters of bare metal and/or virtual systems.`,
    author: `@warewulf`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static-pages`,
        path: `${__dirname}/src/static-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1D315F`,
        theme_color: `#1D315F`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `@devular/gatsby-plugin-plausible`,
      options: {
        domain: `warewulf.org`,
        proxyScript: `https://img.resf.workers.dev/js/script.outbound-links.js`,
        proxyApi: `https://img.resf.workers.dev/img/event`,
      },
    },
  ],
}
