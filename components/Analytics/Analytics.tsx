import { GA_ID } from 'lib/gtag'
import Script from 'next/script'

export const Analytics = () => (
  <>
    <Script
      id="gtag"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
    />
    <Script
      id="ga-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
)
