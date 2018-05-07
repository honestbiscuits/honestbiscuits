import WebFont from 'webfontloader'

import Montserrat from 'typeface-montserrat/index.css'
import Merriweather from 'typeface-merriweather/index.css'

WebFont.load({
  fontinactive(family, fvd) {
    if (family === 'Montserrat:n7' && 'Merriweather:n4,n7') {
      WebFont.load({
        custom: {
          families: ['Montserrat:n7', 'Merriweather:n4,n7'],
          urls: [Montserrat, Merriweather],
        },
      })
    }
  },
  custom: {
    families: ['Montserrat:n7', 'Merriweather:n4,n7'],
    urls: [Montserrat, Merriweather],
  },
  /* Uncomment to enable Google's Font API/CDN
  google: {
    families: ['Montserrat:700', 'Merriweather:400,700'],
  },
  */
})

export default WebFont
