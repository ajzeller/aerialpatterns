// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aerial Patterns | Drone Photography`,
        short_name: `Aerial Patterns`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#4690F0`,
        display: `standalone`,
        icon: `src/assets/ap-logo.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ]
}
