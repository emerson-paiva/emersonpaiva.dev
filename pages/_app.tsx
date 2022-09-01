import { Analytics } from 'components/Analytics'
import { Layout } from 'components/Layout'
import * as gtag from 'lib/gtag'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import GlobalStyle from 'styles/global'
import nextI18NextConfig from '../next-i18next.config.js'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const handleRouteChange = (url: string) => gtag.pageview(url)

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Analytics />
    </>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
