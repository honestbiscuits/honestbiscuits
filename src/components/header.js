import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/honest-biscuits-logo.svg'
import textureTop from '../images/texture-top-1000px.png'

const Header = () => (
  <div className="hero">
    <div className="d-none">
      <form name="honeypot-form" method="post" action="/" className="d-none">
        <input
          type="hidden"
          name="form-name"
          value="honeypot-form"
          id="bot-field"
        />
        <input
          type="name"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    <nav className="navbar navbar-expand-lg navbar-dark py-0">
      <div className="container">
        <Link to="/" className="navbar-brand px-5" activeClassName="active">
          <img src={logo} className="logo" alt="Honest Biscuits" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <Link
                to="/menu"
                className="nav-link px-4 dropdown-toggle"
                activeClassName="active"
                id="navbarDropdown"
                // data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                The Biscuits
              </Link>
              <div
                className="dropdown-menu m-0"
                aria-labelledby="navbarDropdown"
              >
                <Link
                  to="/ingredients-sources"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Ingredients & Sources
                </Link>
                <Link
                  to="/biscuit-mix-directions"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Biscuit Mix Directions
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/menu"
                className="nav-link px-4"
                activeClassName="active"
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/find-buy"
                className="nav-link px-4"
                activeClassName="active"
              >
                Find & Buy
              </Link>
            </li>
            <li className="nav-item dropdown">
	      <div className="nav-link px-4 dropdown-toggle btn-outline-danger">
                Order Now
	      </div>
              <div
                className="dropdown-menu m-0"
                aria-labelledby="navbarDropdown"
              >
                <a
                  href="https://www.grubhub.com/restaurant/honest-biscuits-1901-western-ave-suite-e-seattle/383167?classicAffiliateId=%2Fr%2Fw%2F49686%2F&utm_source=content-cms.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=383167"
                  className="dropdown-item"
                  activeClassName="active"
		  target="_blank"
                >
		 Local Seattle Delivery
                </a>
                <a
                  href="https://ordering.chownow.com/order/10627/locations"
                  className="dropdown-item"
                  activeClassName="active"
		  target="_blank"
                >
                  Instore Pickup
                </a>

                <a
                  href="https://www.ezcater.com/catering/honest-biscuits-3"
                  className="dropdown-item"
                  activeClassName="active"
		  target="_blank"
                >
                  Seattle Catering
                </a>

                <a
                  href="https://www.goldbelly.com/honest-biscuits"
                  className="dropdown-item"
                  activeClassName="active"
		  target="_blank"
                >
                  Nationwide Delivery
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/about-us"
                className="nav-link px-4 dropdown-toggle"
                activeClassName="active"
                id="navbarDropdown"
                // data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </Link>
              <div
                className="dropdown-menu m-0"
                aria-labelledby="navbarDropdown"
              >
                <Link
                  to="/news"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  News
                </Link>
                <Link
                  to="/jobs"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Jobs
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/press"
                className="nav-link px-4"
                activeClassName="active"
              >
                Press
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <img className="texture-top w-100" src={textureTop} alt="texture" />
  </div>
)

export default Header
