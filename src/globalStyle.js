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
    --color-white-200: #c5c5c5;

    --title: 4.8rem;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: var(--color-background);
    font-family: 'Ubuntu', sans-serif;
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
`

export default GlobalStyle
