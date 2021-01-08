require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  faTwitter,
  faLinkedin,
  faStackOverflow,
  faGithub,
} = require("@fortawesome/free-brands-svg-icons");

module.exports = {
  // pathPrefix: "/portfolios",
  siteMetadata: {
    baseUrl: "https://weili512.github.io",
    tagline: "Learn to Create, Learn to Innovate",
    subtitle1: "This is Wei Li, full-stack developer and crypto enthusiast",
    subtitle2: "I am a freelancer based in Shenyang, Liaoning, China.",
    email: "developer.clear@gmail.com",
    title: "Wei Li",
    description: `
      Wei Li is a full stack developer and a blockchain enthusiast. He began his career as a full stack developer since 2016.
      His personal interests include blockchain, cryptocurrency, game development, web development and he has worked toward these interests as a freelancer using various stacks including React, Node.js, Express.js, PHP, CodeIgniter, Laravel, C, C++, C#, and Solidity.
    `,
    author: "@weili512",
    socials: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/weili512/",
        icon: JSON.stringify(faLinkedin),
      },
      {
        name: "github",
        url: "https://github.com/WeiLi512",
        icon: JSON.stringify(faGithub),
      },
      {
        name: "twitter",
        url: "https://twitter.com/WeiLi512",
        icon: JSON.stringify(faTwitter),
      },
      {
        name: "stackoverflow",
        url: "https://stackoverflow.com/users/11894804/li-wei?tab=profile",
        icon: JSON.stringify(faStackOverflow),
      },
    ],
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   options: {
    //     theme: {
    //       // material-ui shrine theme
    //       palette: {
    //         primary: {
    //           main: "#FEDBD0",
    //         },
    //         second: {
    //           main: "#FEEAE6"
    //         },
    //         background: {
    //           default: '#FFFFFF'
    //         },
    //         text: {
    //           primary: "#442C2E"
    //         }
    //       },
    //     },
    //   },
    // },
    "gatsby-theme-material-ui",
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/book.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_TRACKING_ID,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
