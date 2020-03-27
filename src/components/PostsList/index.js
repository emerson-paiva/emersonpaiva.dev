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
      limit: 2
      skip: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...mdFields
      }
    }
  }
`

const PostsList = () => {
  const { firstPost, otherPosts } = useStaticQuery(postsQuery)
  const posts = [...firstPost.nodes, ...otherPosts.nodes]

  return (
    <>
      <S.PostsWrapper>
        {posts?.map(post => (
          <PostItem key={post.fields.slug} post={post} />
        ))}
      </S.PostsWrapper>
      <S.BlogLink to="/blog">ver todos os posts</S.BlogLink>
    </>
  )
}

export default PostsList
