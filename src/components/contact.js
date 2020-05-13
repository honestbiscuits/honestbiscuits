import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import config from '../../config'

import textureBottom from '../images/texture-bottom-1000px.png'
import staticMap from '../images/staticmap-2x-420px.png'

const Contact = () => (
  <div className="contact">
    <img
      className="texture-bottom w-100 m-0"
      src={textureBottom}
      alt="texture"
    />
    <section role="contentinfo">
      <div className="container">
        <div className="d-flex align-content-center flex-wrap">
          <div className="col-md-6 mx-auto">
            <div className="row pb-3">
              <div className="col">
                <a href={config.userLinks[0].url} className="social-link">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
              <div className="col">
                <a href={config.userLinks[1].url} className="social-link">
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
              <div className="col">
                <a href={config.userLinks[2].url} className="social-link">
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
              <div className="col">
                <a href={config.userLinks[3].url} className="social-link">
                  <FontAwesomeIcon
                    icon={['fab', 'pinterest']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
              <div className="col">
                <a href={config.userLinks[5].url} className="social-link">
                  <FontAwesomeIcon
                    icon={['fas', 'rss']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-1 mr-2 my-2">
                <a href={config.userGMapUrl} className="social-link">
                  <FontAwesomeIcon
                    icon={['fas', 'location-arrow']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
              <div className="col text-left my-2">
                {config.userLocationAddress[0].street} <br />
                {config.userLocationAddress[0].city}, &nbsp;
                {config.userLocationAddress[0].state} &nbsp;
                {config.userLocationAddress[0].zip} <br />
              </div>
            </div>
            <div className="row">
              <div className="col-1 mr-2 my-2">
                  <FontAwesomeIcon
                    icon={['fas', 'clock']}
                    fixedWidth
                    className="fa-icon"
                  />
              </div>
              <div className="col text-left my-2">
                {config.userLocationHours} 
                <br/>{config.userLocationHours2}
              </div>
            </div>
            <div className="row">
              <div className="col-1 mr-2 my-2">
                <a href={config.userLinks[6].url} className="social-link">
                  <FontAwesomeIcon
                    icon={['fas', 'money-check-alt']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
              <div className="col text-left my-2">
                <a href={config.userLinks[6].url} className="social-link">
                  Order {config.userLinks[6].label}
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-1 mr-2 my-2">
                <a href={config.userLinks[4].url} className="social-link">
                  <FontAwesomeIcon
                    icon={['fas', 'utensils']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
              <div className="col text-left my-2">
                <a href={config.userLinks[4].url} className="social-link">
                  Order online using {config.userLinks[4].label}
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-1 mr-2 my-2">
                <a href={`tel:${config.userPhone}`} className="social-link">
                  <FontAwesomeIcon
                    icon={['fas', 'phone-square']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
              <div className="col text-left my-2">
                <a href={`tel:${config.userPhone}`} className="social-link">
                  {config.userPhone}
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-1 mr-2 my-2">
                <a href={`mailto:${config.userEmail}`} className="social-link">
                  <FontAwesomeIcon
                    icon={['fas', 'envelope-open']}
                    fixedWidth
                    className="fa-icon"
                  />
                </a>
              </div>
              <div className="col text-left my-2">
                <a href={`mailto:${config.userEmail}`} className="social-link">
                  {config.userEmail}
                </a>
              </div>
            </div>
          </div>
          <div className="w-100 d-none d-sm-block d-md-none" />
          <div className="col-md-6">
            <div className="map mx-auto mb-3">
              <a href={config.userGMapUrl}>
                <img
                  src={staticMap}
                  className="img-fluid"
                  width="420px"
                  height="420px"
                  alt="Honest Biscuits Map"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Contact
