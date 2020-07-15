import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

html {
  font-size: 62.5%
}



body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
}

body,
input,
button {
  font-family: Lato, sans-serif;
}

@media (max-width: 1400px) {
  html {
    font-size: 58.5%
  }
}

@media (max-width: 1275px) {
  html {
    font-size: 48.5%
  }
}

`;
