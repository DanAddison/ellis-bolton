module.exports = {
  siteMetadata: {
    title: `Ellis Bolton`,
    description: `Freelance illustrator from Folkestone.`,
    author: `Dan Addison`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about",
        link: "/about",
      },
    ],
  },
  plugins: [
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
        background_color: `#ff4800`,
        theme_color: `#ff4800`,
        display: `minimal-ui`,
        icon: `src/images/Ellis.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Droid Sans", "Droid Serif"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
