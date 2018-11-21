import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/content'
import config from '../../config'

export const PageTemplate = ({
  title,
  description,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

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
      <PageContent className="content" content={content} />
    </div>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func.isRequired,
}

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      content={post.html}
    />
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const PageQuery = graphql`
  query page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
