const config = require('./config')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    settings: { ...config },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 640,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.siteGATrackingID,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-feed',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          `Content-Security-Policy: default-src 'self' *.honestbiscuits.com honest-biscuits.netlify.com *.netlify.com *.cloudfront.net *.googleapis.com *.google-analytics.com *.gstatic.com *.googleusercontent.com; script-src 'self' 'unsafe-inline' *.honestbiscuits.com honest-biscuits.netlify.com *.netlify.com *.cloudfront.net *.googleapis.com *.google-analytics.com *.gstatic.com *.googleusercontent.com; style-src 'self' 'unsafe-inline' *.honestbiscuits.com honest-biscuits.netlify.com *.netlify.com *.cloudfront.net *.googleapis.com *.google-analytics.com *.gstatic.com *.googleusercontent.com; img-src 'self' data: *.honestbiscuits.com honest-biscuits.netlify.com *.netlify.com *.cloudfront.net *.googleapis.com *.google-analytics.com *.gstatic.com *.googleusercontent.com *.doubleclick.net; font-src 'self' *.honestbiscuits.com honest-biscuits.netlify.com *.netlify.com *.cloudfront.net *.googleapis.com *.google-analytics.com *.gstatic.com *.googleusercontent.com; frame-src 'self' *.honestbiscuits.com honest-biscuits.netlify.com *.youtube.com *.youtube-nocookie.com *.vimeo.com; form-action 'self' *.honestbiscuits.com honest-biscuits.netlify.com *.netlify.com *.cloudfront.net *.googleapis.com *.google-analytics.com *.gstatic.com *.googleusercontent.com; object-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests;`,
          'X-Frame-Options: DENY',
          'X-XSS-Protection: 1; mode=block',
          'X-DNS-Prefetch-Control: on',
          'X-Content-Type-Options: nosniff',
          'Referrer-Policy: no-referrer',
        ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
