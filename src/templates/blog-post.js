import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/seo'
import * as S from 'components/Post/styled'

const BlogPost = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark
  const { coverCredits } = frontmatter

  return (
    <>
      <S.Cover fluid={frontmatter.thumbnail.childImageSharp.fluid} />
      <S.CoverCredit>
        Créditos:{' '}
        <a href={coverCredits.link} target="_blank">
          {coverCredits.name}
        </a>
      </S.CoverCredit>
      <Layout>
        <SEO title={frontmatter.title} />
        <S.PostTitleWrapper>
          <S.PostTitle>{frontmatter.title}</S.PostTitle>
        </S.PostTitleWrapper>
        <S.PostView>
          <S.PostExcerpt
            dangerouslySetInnerHTML={{ __html: frontmatter.excerpt }}
          />
          <S.PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </S.PostView>
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
        excerpt
        coverCredits {
          link
          name
        }
        date(formatString: "DD MMM, YYYY", locale: "pt-Br")
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 2560, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPost
