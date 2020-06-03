import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  :root {
    --color-primary: #794BC4;
    --color-background: #15202B;
    --color-white-100: #f3f3f3;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: var(--color-background);
    font-family: 'Ubuntu', sans-serif;
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
