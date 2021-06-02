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
    font-weight: 400;
    color: white;
    line-height: 24px;
    font-size: 14px;
    letter-spacing: 0px;
  }
  
  h1  {
    font-size: 2.5rem;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
`;
