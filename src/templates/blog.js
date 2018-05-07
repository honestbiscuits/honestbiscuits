import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/content'
import config from '../../config'
import Messaging from '../components/messaging'

export const BlogTemplate = ({
  title,
  description,
  date,
  content,
  contentComponent,
}) => {
  const BlogContent = contentComponent || Content

  return (
    <div className="container">
      <Helmet
        title={`${config.siteTitle} - ${title}`}
        meta={[
          {
            name: 'description',
            content: `${description}`,
          },
          {
            property: 'og:title',
            content: `${config.siteTitle} - ${title}`,
          },
          {
            property: 'og:description',
            content: `${description}`,
          },
          {
            name: 'twitter:title',
            content: `${config.siteTitle} - ${title}`,
          },
          {
            property: 'twitter:description',
            content: `${description}`,
          },
        ]}
      />
      <h1 className="display-5">{title}</h1>
      <h5 className="text-muted">&bull; {date}</h5>
      <BlogContent className="content" content={content} />
      <div className="dotted-line my-3" />
      <Messaging />
    </div>
  )
}

BlogTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func.isRequired,
}

const Blog = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      date={post.frontmatter.date}
      content={post.html}
    />
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Blog

export const BlogQuery = graphql`
  query blog($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
