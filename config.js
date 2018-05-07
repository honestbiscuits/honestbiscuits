module.exports = {
  blogPostDir: 'blog', // The name of directory that contains your posts.
  siteTitle: 'Honest Biscuits', // Site title.
  siteTitleAlt: 'Honest Biscuits', // Alternative site title for SEO.
  siteLogo: '/images/logo-512px-p-500x500.png', // Logo used for SEO and manifest.
  siteUrl: 'https://www.honestbiscuits.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: 'Honest to Goodness, Kick-ass Biscuits... Each sales day, the biscuits are made fresh from local ingredients, the primary being Washington’s Shepherd’s Grain flour. This is the same premium quality, sustainably grown flour used in some of the best local bakeries. We add local dairy products to make a delicious piece of bread that is slightly crunchy on the outside, but light on the inside. A local baker described them as "fluffy clouds of goodness".', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  siteGATrackingID: 'UA-117671838-1', // Tracking code ID for google analytics.
  disqusShortname: '', // Disqus shortname.
  userName: 'Honest Biscuits', // Username to display in the author segment.
  userTwitter: 'HonestBiscuits', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Seattle, WA, Earth', // User location to display in the author segment.
  userLocationHours: 'Open daily from 8AM — 5PM',
  userLocationAddress: [
    {
      street: '1901 Western Avenue',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
    },
  ],
  userGMapUrl: 'https://goo.gl/maps/dGjttB86jbN2',
  userPhone: '+1 (206) 682-7179',
  userEmail: 'info@honestbiscuits.com',
  userAvatar: '', // User avatar to display in the author segment.
  userDescription: '', // User description to display in the author segment.
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
