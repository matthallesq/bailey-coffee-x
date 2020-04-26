require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'Bailey Coffee',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'MTAwZTI2NDctMTZkYy00MWZkLTg5NWYtM2RhMzgyNTUyMzZiNjM3MjIwNzA4Nzc4OTE5NjIz',
        autopop: true
      }
    },
  ],
}
