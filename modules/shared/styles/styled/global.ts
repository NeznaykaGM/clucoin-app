import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #__next {
    height: 100%;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    position: relative;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    color: white;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
`;
