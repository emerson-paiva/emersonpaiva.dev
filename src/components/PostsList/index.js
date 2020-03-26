import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PostItem from 'components/PostItem'

const postsQuery = graphql`
  query {
    firstPost: allMarkdownRemark(
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date
          title
          tags
          thumbnail {
            id
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
        timeToRead
      }
    }
    otherPosts: allMarkdownRemark(
      limit: 2
      skip: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date
          title
          tags
        }
        timeToRead
      }
    }
  }
`

const PostsList = () => {
  const { firstPost, otherPosts } = useStaticQuery(postsQuery)
  const posts = [...firstPost.nodes, ...otherPosts.nodes]

  return (
    <div className="posts-list">
      {posts?.map(post => (
        <PostItem key={post.fields.slug} post={post} />
      ))}
    </div>
  )
}

export default PostsList
