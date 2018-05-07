import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bootstrap'

import './index.scss'

import config from '../../config'

import SEO from '../utils/seo'
import fontawesome from '../utils/fontawesome'

import Header from '../components/header'
import Contact from '../components/contact'
import Footer from '../components/footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <SEO />
    <Header />
    <main id="content">
      <div className="container">{children()}</div>
    </main>
    <Contact />
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default TemplateWrapper
