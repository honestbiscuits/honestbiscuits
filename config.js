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
  userLocationHours: 'Open for Take-out and Nearly Everyday', // Business hours displayed in contact segment.
  // userLocationHours2: "Weekends 8AM — 2PM", // 2nd Line of Business hours
  userLocationHours2: 'Wednesday to Monday 8AM — 2PM ',
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
  userDescription: 'Open for Take-out and Delivery', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      linkid: '0',
      label: 'Facebook',
      url: 'https://www.facebook.com/HonestBiscuits/',
    },
    {
      linkid: '1',
      label: 'Twitter',
      url: 'https://twitter.com/HonestBiscuits/',
    },
    {
      linkid: '2',
      label: 'Instagram',
      url: 'https://www.instagram.com/HonestBiscuits/',
    },
    {
      linkid: '3',
      label: 'Pinterest',
      url: 'https://www.pinterest.com/HonestBiscuits/pins/follow/',
    },
    {
      linkid: '4',
      label: 'ChowNow',
      url: 'https://ordering.chownow.com/order/10627/locations',
    },
    {
      linkid: '5',
      label: 'RSS',
      url: '/rss.xml',
    },
    {
      linkid: '6',
      label: 'Gift Cards',
      url: 'https://squareup.com/gift/AAHD65JMKMENJ/order',
    },
    {
      linkid: '7',
      label: 'DoorDash',
      url: 'https://www.doordash.com/store/186327/?utm_source=partner-link',
    },
    {
      linkid: '8',
      label: 'GrubHub',
      url: 'https://www.grubhub.com/restaurant/honest-biscuits-1901-western-ave-suite-e-seattle/383167?classicAffiliateId=%2Fr%2Fw%2F49686%2F&utm_source=content-cms.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=383167',
    },
    {
      linkid: '9',
      label: 'PostMates',
      url: 'https://postmates.com/merchant/honest-biscuits-seattle-2',
    },
    {
      linkid: '10',
      label: 'Uber Eats',
      url: 'https://www.ubereats.com/seattle/food-delivery/honest-biscuits/je6niXO6QvKi3AAGaST-cA',
    },
  ],
  get copyright() {
    return `Copyright \u00A9 ${new Date().getFullYear()} ${this.siteTitle}`
  }, // Copyright string for the footer of the website and RSS feed.
  themeColor: '#da532c', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}
