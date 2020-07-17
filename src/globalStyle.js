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
    --color-primary: #a670fe;
    --color-background: #15202B;
    --color-text: #f3f3f3;
    --color-lamp: #fff48f;
    --color-white-100: #f3f3f3;
    --color-white-200: #d0d0d0;

    --title: 4.8rem;
    --mobile-title: 3.6rem;
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
    font-family: 'Quicksand', sans-serif;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  body.dark {
    --color-lamp: #434343;
  }
`

export default GlobalStyle
