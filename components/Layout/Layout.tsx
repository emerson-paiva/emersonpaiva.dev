import { PropsWithChildren } from 'react'

// import GlobalStyle from '../../globalStyle'
import * as S from './styled'

// import '../../fonts.css'
import { Footer } from 'components/Footer'
import { FindMe } from 'components/FindMe'
import { Header } from 'components/Header'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  // use next data api
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         author
  //         jobTitle
  //         description
  //         findMe {
  //           linkedin
  //           github
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { author: twitter, findMe } = data.site.siteMetadata

  return (
    <>
      <Header />
      <FindMe github="emerson-paiva" linkedin="emerson-paiva" twitter="" />
      <S.Main>{children}</S.Main>
      {/* <Footer /> */}
    </>
  )
}
