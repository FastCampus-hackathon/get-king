import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    font-family: 'Pretendard', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  html {
    font-family: 'Pretendard', sans-serif;
  }
  body {
    font-family: 'Pretendard', sans-serif;
    width: 100%;
    line-height: ${({ theme }) => theme.lineHeights.lineHeight};
    letter-spacing: ${({ theme }) => theme.letterSpacings.letterSpacing};
    color: ${({ theme }) => theme.colors.primary};
   
  }
  h1 {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  a,
  button {
    cursor: pointer;
  }
  button {
    padding: 0;
  }
  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
