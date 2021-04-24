/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Inclusive Upper Valley',
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'about',
        link:'/about'
      },
      {
        name:'contact',
        link:'/contact'
      },
      {
        name:'support',
        link:'/support'
      },
      {
        name:'news',
        link:'/news'
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        ///short_name: `GatsbyJS`,
        //start_url: `/`,
        //background_color: `#6b37bf`,
        //theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },    
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
