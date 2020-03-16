import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
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
