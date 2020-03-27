import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PostItem from 'components/PostItem'

import * as S from './styled'

const postsQuery = graphql`
  fragment mdFields on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      date(formatString: "DD MMM, YYYY", locale: "pt-Br")
      title
      tags
    }
    timeToRead
  }

  query {
    firstPost: allMarkdownRemark(
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...mdFields
        frontmatter {
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    otherPosts: allMarkdownRemark(
      limit: 7
      skip: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...mdFields
      }
    }
  }
`

const BlogPost = () => {
  const { firstPost, otherPosts } = useStaticQuery(postsQuery)
  const posts = [...firstPost.nodes, ...otherPosts.nodes]

  return (
    <>
      <S.PostsWrapper>
        {posts?.map(post => (
          <PostItem key={post.fields.slug} post={post} />
        ))}
      </S.PostsWrapper>
      {/* TODO: */}
      {/* <S.BlogLink to="/blog">add pagination</S.BlogLink> */}
    </>
  )
}

export default BlogPost
