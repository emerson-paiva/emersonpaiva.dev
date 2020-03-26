import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from 'components/Header'
import Footer from 'components/Footer'
import FindMe from 'components/FindMe'

import GlobalStyle from '../../globalStyle'
import * as S from './styled'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          jobTitle
          description
          findMe {
            linkedin
            github
          }
        }
      }
    }
  `)

  const { author: twitter, findMe } = data.site.siteMetadata

  return (
    <>
      <GlobalStyle />
      <Header />
      <FindMe socialMedias={{ twitter, ...findMe }} />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
