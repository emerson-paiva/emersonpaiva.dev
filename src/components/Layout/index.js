import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from 'components/core/Header'
import Footer from 'components/core/Footer'
import FindMe from 'components/core/FindMe'

import GlobalStyle from '../../globalStyle'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          findMe {
            linkedin
            github
          }
        }
      }
    }
  `)

  const { title, author: twitter, findMe } = data.site.siteMetadata

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={title} />
      <FindMe socialMedias={{ twitter, ...findMe }} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
