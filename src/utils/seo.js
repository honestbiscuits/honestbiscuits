import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from '../../config'
import favicon from '../../static/favicons/favicon-32x32.png'
import siteLogo from '../../static/images/honest-biscuits-logo.png'
import artHBSign from '../../static/uploads/art-hb-sign.jpg'
import biscuitMug from '../images/chicken-biscuit-mug.jpg'

const SEO = () => {
  const schemaOrgJSONLD = [
    {
      	'@context': 'http://schema.org',
      	'@type': 'Restaurant',
      	url: config.siteUrl,
      	name: config.siteTitle,
      	alternateName: config.siteTitleAlt,
      	image: config.siteLogo,
      	description: config.siteDescription,
      	address : ({
	'@type': 'PostalAddress',
	addressLocality : 'Seattle', 
	addressRegion: 'WA', 
	postalCode: '98101', 
	streetAddress: '1901 Western Avenue', 
	}),
 
	email:'info@honestbiscuits.com',
	openingHours: ['Mo-Su 08:00-16:00'], 
	geo: ({
    		'@type': 'GeoCoordinates',
    		latitude : '47.6096656',
    		longitude : '-122.3431935',
 	}), 		
 	sameAs : [ "https://www.facebook.com/HonestBiscuits/",
    			"https://twitter.com/HonestBiscuits",
    			"https://www.pinterest.com/honestbiscuits/",
			"https://www.instagram.com/honestbiscuits/"],

	priceRange : '1',
	servesCuisine : ['Biscuits, Breakfast, Cafe, Vegetarian, Vegan, Gluten Free, Southern, Chicken, Sandwich, Soup'], 
	acceptsReservations : 'false',
	menu : 'https://www.honestbiscuits.com/menu',
	paymentAccepted : 'Visa, Master Card, Discover, Amex',

    },
  ]
  return (
    <Helmet>
      {/* General tags */}
      <title>{config.siteTitle}</title>
      <meta name="description" content={config.siteDescription} />
      <meta name="image" content={config.siteUrl + siteLogo} />
      <link rel="shortcut icon" href={favicon} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* Verification tags */}
      <meta name="msvalidate.01" content="1C0F8A88201B302F434B71250B76E7FE" />
      <meta name="yandex-verification" content="893523485867f1f8" />

      {/* Facebook OpenGraph tags */}
      <meta property="og:locale" content="en_EN" />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={config.siteDescription} />
      <meta property="og:image" content={config.siteUrl + siteLogo} />
      <meta property="og:image" content={config.siteUrl + biscuitMug} />
      <meta property="og:image" content={config.siteUrl + artHBSign} />
      <meta property="fb:app_id" content={config.siteFBAppID} />

      {/* Twitter Meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter} />
      <meta name="twitter:title" content={config.siteTitle} />
      <meta name="twitter:site" content={config.siteUrl} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={config.siteDescription} />
      <meta name="twitter:image" content={config.siteUrl + siteLogo} />
    </Helmet>
  )
}

export default SEO
