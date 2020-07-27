import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text);
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Noto Sans', sans-serif;
  }

  #root {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  html, body, #root {
    height: 100vh;
  }

  button {
    cursor: pointer;
    background: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Mulish', sans-serif;
    font-weight: bold;
    color: var(--title);
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  :root {
    --primary: #335DFF;
    --text: #B2B6BB;
    --title: #1C1D24;
    --background: #F7F8FC;
    --white: #FFFFFF;
  }
`;
