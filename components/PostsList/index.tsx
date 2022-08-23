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
    posts: allMarkdownRemark(
      filter: {
        fields: {
          slug: {
            ne: "criando-uma-tela-de-erro-generica-error-boundaries-no-react"
          }
        }
      }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...mdFields
        frontmatter {
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 660, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const PostsList = () => {
  const {
    posts: { nodes: posts },
  } = useStaticQuery(postsQuery)

  return (
    <>
      <S.PostsWrapper>
        {posts?.map((post) => (
          <PostItem key={post.fields.slug} post={post} />
        ))}
      </S.PostsWrapper>
      <S.BlogLink to="/blog">ver todos os posts</S.BlogLink>
    </>
  )
}

export default PostsList
