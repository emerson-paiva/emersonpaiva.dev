import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/seo'

import * as S from 'components/Post/styled'

const BlogPost = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <S.Cover fluid={frontmatter.thumbnail.childImageSharp.fluid} />
      <Layout>
        <SEO title={frontmatter.title} />
        <div>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        tags
        description
        date(formatString: "DD MMM, YYYY", locale: "pt-Br")
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPost
