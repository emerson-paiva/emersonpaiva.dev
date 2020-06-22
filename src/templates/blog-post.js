import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/seo'
import Comments from 'components/Comments'
import { getTimeToRead } from 'components/PostItem'
import * as S from 'components/Post/styled'

const BlogPost = ({ data: { markdownRemark } }) => {
  const { frontmatter, html, timeToRead } = markdownRemark
  const { coverCredits, tags, title, slug, excerpt } = frontmatter

  return (
    <>
      <S.Cover fluid={frontmatter.thumbnail.childImageSharp.fluid} />
      <S.CoverCredit>
        Capa:{' '}
        <a href={coverCredits.link} target="_blank">
          {coverCredits.name}
        </a>
      </S.CoverCredit>
      <Layout>
        <SEO title={title} />
        <S.PostTitleWrapper>
          <span />
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostTagsAndTime>
            <S.Tags>
              {tags.map((tag) => (
                <S.Tag key={tag}>#{tag}</S.Tag>
              ))}
            </S.Tags>{' '}
            - {getTimeToRead(timeToRead)}
          </S.PostTagsAndTime>
        </S.PostTitleWrapper>
        <S.PostView>
          <S.PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
          <S.PostContent dangerouslySetInnerHTML={{ __html: html }} />
          <Comments title={title} slug={slug} />
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
        slug
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
