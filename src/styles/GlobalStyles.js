import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";





const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Stop-Mn", sans-serif; /* Default body font */
    overflow-x: hidden;
  }

  h1 {
    font-family: "p22-posada", serif; /* Set your desired font for h1 */
    font-weight: 400;  /* Adjust weight and style as needed */
    font-style: normal;
  }

  h2 {
    font-family: "adelphi-pe-variable", sans-serif; /* Set your desired font for h2 */
    font-variation-settings: "slnt" -9.5, "opsz" 6, "wght" 900;
    font-weight: 900;
    font-style: italic; /* Adjust weight and style as needed */
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;