import { Analytics } from 'components/Analytics'
import { Layout } from 'components/Layout'
import * as gtag from 'lib/gtag'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import GlobalStyle from 'styles/global'

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

export default MyApp
