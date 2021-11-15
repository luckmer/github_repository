import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  padding:0;
  margin:0;
  box-sizing:border-box;
}

a{
  text-decoration:none;
}

width: 100vw;
height: 100vh;


`;

export default GlobalStyle;
