import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { typography } from "./typography";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${typography};
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Nunito Sans", sans-serif;
    color: ${({ theme }) => theme.foreground};
  }
`;

export default GlobalStyles;
