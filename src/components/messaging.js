import React from 'react'
import config from '../../config'

import kickAss from '../images/kick-ass-biscuits.png'
import biscuitMug from '../images/chicken-biscuit-mug.jpg'

const Messaging = () => (
  <div className="container">
    <center>
    <h3>Open for <a href={config.userLinks[4].url} target="_blank">Takeout</a> and <a href={config.userLinks[10].url} target="_blank">Delivery</a><br />
    or <a href={config.userLinks[6].url} target="_blank">Order Gift Cards</a><br/>
  <a href="https://honest-biscuits.square.site/#gfTNzW">Order Easy Gift Boxes &amp; support small businesses in Seattle.</a>
    </h3>
    </center>
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
