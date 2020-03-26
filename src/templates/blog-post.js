import React from 'react'
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
  console.log(data)

  return (
    <div>
      <span>POST</span>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost
