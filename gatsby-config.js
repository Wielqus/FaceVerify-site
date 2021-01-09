/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/FaceVerify-site",
  plugins: [`gatsby-plugin-sass`, 
  {
    resolve: `gatsby-theme-docz`,
    options: {
      'base': 'docs',
      'title': 'FaceVerify'
    },
  },],
}