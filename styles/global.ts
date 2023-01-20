import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  :root {
    --title: 4.8rem;
    --mobile-title: 3.6rem;
    --color-primary: #a670fe;
    --color-background: #15202B;
    --color-text: #f3f3f3;
    --color-text-2: #d0d0d0;
    --color-lamp: #434343;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    ${media.lessThan('small')`
      font-size: 55%;
    `}
  }

  body {
    background-color: var(--color-background);
    font-family: 'Fira Code', monospace, sans-serif;
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (prefers-color-scheme: light) {
      --color-primary: #a670fe;
      --color-background: #ffffff;
      --color-text: #14171a;
      --color-text-2: #404040;
      --color-lamp: #fff48f;
    }
  }

  button {
    appearance: none;
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;

  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
