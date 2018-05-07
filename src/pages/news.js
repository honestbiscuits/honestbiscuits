import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PostLink from '../components/post-link'
import config from '../../config'

const NewsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div className="container">
      <Helmet title={`${config.siteTitle} - News`}>
        <meta property="og:title" content={`${config.siteTitle} - News`} />
        <meta name="twitter:title" content={`${config.siteTitle} - News`} />
      </Helmet>
      <h1 className="display-5">News</h1>
      {Posts}
    </div>
  )
}

NewsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default NewsPage

export const PageQuery = graphql`
  query news {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
