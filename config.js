module.exports = {
  blogPostDir: 'blog', // The name of directory that contains your posts.
  siteTitle: 'Honest Biscuits', // Site title.
  siteTitleAlt: 'Honest Biscuits', // Alternative site title for SEO.
  siteLogo: '/images/honest-biscuits-logo.svg', // Logo used for SEO and manifest.
  siteUrl: 'https://www.honestbiscuits.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: 'Honest Biscuits restaurant in the Pike Place Market in Downtown Seattle bakes fresh golden brown biscuits daily using the best local ingredients. A short walk from Belltown, Pioneer Square and the Seattle Waterfront the shop is located on Western Avenue in the new Pike Market MarketFront expansion offering Seattle\'s best views.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  siteGATrackingID: 'UA-117671838-1', // Tracking code ID for google analytics.
  siteGTMTrackingID: 'GTM-5GDGBZ7', // Tracking code ID for google tag manager.
  siteGMTAuthID: '', // optional google tag manager environment auth string.
  siteGMTPreviewName: '', // optional google tag manager environment preview name string.
  disqusShortname: '', // Disqus shortname.
  userName: 'Honest Biscuits', // Username to display in the author segment.
  userTwitter: 'HonestBiscuits', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Seattle, WA, Earth', // User location to display in the author segment.
  userLocationHours: "Open for Take-out and Delivery Everyday (Except Tuesdays) 8AM — 2PM", // Business hours displayed in contact segment.
  // userLocationHours2: "Weekends 8AM — 2PM", // 2nd Line of Business hours
  userLocationHours2: '',
  //userScheduleHours: 'We-Mo 08:00-14:00,Sa-Su 08:00-14:00', // Business hours formatted for JSON-LD.
  userScheduleHours: 'Wed-Mo 08:00-14:00',
  userLocationAddress: [
    {
      street: '1901 Western Avenue',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
    },
  ],
  userLatitude: '47.6096656',
  userLongitude: '-122.3431935',
  userGMapUrl: 'https://goo.gl/maps/dGjttB86jbN2',
  userPhone: '+1 (206) 682-7179',
  userEmail: 'info@honestbiscuits.com',
  userAvatar: '', // User avatar to display in the author segment.
  userDescription: 'Open for Take-out and Delivery Only', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/HonestBiscuits/',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/HonestBiscuits/',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/HonestBiscuits/',
    },
    {
      label: 'Pinterest',
      url: 'https://www.pinterest.com/HonestBiscuits/pins/follow/',
    },
    {
      label: 'ChowNow',
      url: 'https://ordering.chownow.com/order/10627/locations',
    },
    {
      label: 'RSS',
      url: '/rss.xml',
    },
  ],
  get copyright() {
    return `Copyright \u00A9 ${new Date().getFullYear()} ${this.siteTitle}`
  }, // Copyright string for the footer of the website and RSS feed.
  themeColor: '#da532c', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}
