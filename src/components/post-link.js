import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const PostLink = ({ post }) => (
  <div className="card shadow-sm my-3">
    <div className="card-body">
      <h3 className="card-title">
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h3>
      <h6 className="card-subtitle mb-2 text-muted">
        &bull; {post.frontmatter.date}
      </h6>
      <p className="card-text">{post.frontmatter.description}</p>
    </div>
  </div>
)

PostLink.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostLink
