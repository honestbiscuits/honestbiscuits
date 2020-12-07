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
              <a
                  href="https://honest-biscuits.square.site/#gfTNzW"
                  className="nav-link px-4"
                  activeClassName="active"
                  target="_blank"
                >
                Gifts
              </a>
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
              <div className="nav-link px-4 dropdown-toggle order-now">
                Order Now
              </div>
              <div
                className="dropdown-menu m-0"
                aria-labelledby="navbarDropdown"
              >
                <a
                  href="https://www.ubereats.com/seattle/food-delivery/honest-biscuits/je6niXO6QvKi3AAGaST-cA"
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
                  href="https://www.ezcater.com/catering/pvt/honest-biscuits-3"
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
  
                  <a
                  href="https://honest-biscuits.square.site/#sjmgoa"
                  className="dropdown-item"
                  activeClassName="active"
                  target="_blank"
                >
                  Mixes &amp; Coffee
                </a>

                <a
                  href="https://honest-biscuits.square.site/#soLxYF"
                  className="dropdown-item"
                  activeClassName="active"
                  target="_blank"
                >
                  Merchandise
                </a>
  
                  <a
                  href="https://honest-biscuits.square.site/#gfTNzW"
                  className="dropdown-item"
                  activeClassName="active"
                  target="_blank"
                >
                  Gifts
                </a>

                <a
                  href="https://squareup.com/gift/AAHD65JMKMENJ/order"
                  className="dropdown-item"
                  activeClassName="active"
                  target="_blank"
                >
                  Gift Cards
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
              <Link
                to="/press"
                className="dropdown-item"
                activeClassName="active"
              >
                Press
              </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <img className="texture-top w-100" src={textureTop} alt="texture" />
  </div>
)

export default Header
