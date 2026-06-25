import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: ${theme.fonts.body};
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  @keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

  }
  @media (prefers-reduced-motion: no-preference){
    .page-content{
      animation: fadeIn 0.3s ease forwards;
    }
  }

`;

export default GlobalStyles;
