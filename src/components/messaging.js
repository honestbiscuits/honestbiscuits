import React from 'react'
import config from '../../config'

import kickAss from '../images/kick-ass-biscuits.png'
import biscuitMug from '../images/chicken-biscuit-mug.jpg'

const Messaging = () => (
  <div className="container">
    <h1>Open for <a href={config.userLinks[4].url}>Takeout</a> and <a href={config.userLinks[6].url}>Delivery</a>!</h1>
    <div className="d-md-inline-flex row align-items-center">
      <div className="col text-center mx-auto">
        <img className="img-fluid" src={kickAss} alt="Kick Ass Biscuits" />
      </div>
      <div className="col text-center mx-auto">
        <img
          className="img-fluid page-image"
          src={biscuitMug}
          alt="Chicken Biscuit Mug"
        />
      </div>
    </div>
  </div>
)

export default Messaging
