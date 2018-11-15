import React from 'react'
import config from '../../config'

const Footer = () => (
  <div className="footer">
    <footer role="contentinfo">
      <div className="container">
        <div className="row justify-content-around align-items-center text-center">
          <div className="col-md-4 my-2 text-nowrap">
            Some photos via&nbsp;
            <a href="https://www.savorseattletours.com" alt="Savor Seattle">
              Savor Seattle
            </a>
          </div>
          <div className="col-md-4 my-2 text-nowrap">Thanks for visiting!</div>
          <div className="col-md-4 my-2 text-nowrap">{config.copyright}</div>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
