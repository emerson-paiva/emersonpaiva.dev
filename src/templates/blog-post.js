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
        <S.PostTitle>Titulo da Postagem contendo no máximo 2 linhas para manter de forma agradável</S.PostTitle>
        <S.PostView>
          <S.PostExcerpt>Lucas ipsum dolor sit amet fett sidious hutt luke binks chewbacca kamino bespin hutt leia. Leia calamari k-3po dooku darth calamari antilles. Coruscant darth han chewbacca. Organa mace solo skywalker. Wedge darth mon darth wicket gamorrean qui-gonn bothan ackbar.</S.PostExcerpt>
          {/* <S.PostContent dangerouslySetInnerHTML={{ __html: html }} /> */}
          <S.PostContent>
            <p>
              Lucas ipsum dolor sit amet fett sidious hutt luke binks chewbacca kamino bespin hutt leia. Leia calamari k-3po dooku darth calamari antilles. Coruscant darth han chewbacca. Organa mace solo skywalker. Wedge darth mon darth wicket gamorrean qui-gonn bothan ackbar. Darth chewbacca bespin vader. Ben c-3p0 calrissian jinn bothan. Vader darth jinn skywalker darth jar sebulba palpatine coruscant. Palpatine grievous darth jango kenobi. Sidious vader dantooine gonk yoda gamorrean. Dooku ewok ben mara jango organa.
            </p>
            <p>
              Kamino vader dagobah zabrak organa. Organa hutt leia bothan leia. Darth darth antilles dooku wookiee. Mara organa mandalorians darth coruscant. Mace coruscant alderaan zabrak darth kamino dagobah organa. Hoth calamari jango darth fett c-3po ponda darth jango. Naboo coruscant ventress anakin darth sidious luke. Kit antilles wookiee fett organa. Qui-gon ackbar moff darth solo moff zabrak padmé. Wampa leia hutt skywalker moff. Darth bothan cade darth yoda yoda. Mara kit solo antilles vader. Darth baba gamorrean mon.
            </p>
          </S.PostContent>
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
        description
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
