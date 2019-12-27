const { faTwitter, faLinkedin, faStackOverflow, faGithub } = require('@fortawesome/free-brands-svg-icons');

module.exports = {
  pathPrefix: "/portfolios",
  siteMetadata: {
    title: `Borys Lee`,
    description: `
      Borys Lee is a full-stack web developer with 1 year of game development experience and 2 years of full-stack experience.
      His personal interests include cryptocurrency and game development, and he has worked toward these interests as a freelancer using various stacks including React, Node.js, Express, PHP, CodeIgniter, Laravel, C, C++, C# and Solidity.
    `,
    author: `@boryslee`,
    socials: [
      {
        name: 'linkedin',
        url: 'https://linkedin.com/in/boryslee',
        icon: JSON.stringify(faLinkedin)
      },
      {
        name: 'github',
        url: 'https://github.com/boryslee111',
        icon: JSON.stringify(faGithub)
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/boryslee111',
        icon: JSON.stringify(faTwitter)
      },
      {
        name: 'stackoverflow',
        url: 'https://stackoverflow.com/users/11894804/borys-lee?tab=profile',
        icon: JSON.stringify(faStackOverflow)
      },
    ]
  },
  plugins: [
    'gatsby-plugin-material-ui',
    'gatsby-plugin-eslint',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
