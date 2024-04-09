import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'October Crow';
    src: url('./fonts/october-crow.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-family: 'October Crow', sans-serif;
    font-weight: normal;
  }

  body * {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  section {
    background-color: ${props => props.theme.background[20]};
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
  }

`;

export default GlobalStyle;