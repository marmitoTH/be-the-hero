import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  :root {
    font-size: 55%;
  }

  body {
    min-height: 100vh;
    background: #F0F0F5;
  }

  button {
    cursor: pointer;
  }

  body, input, text-area {
    font: 400 1rem 'Roboto', sans-serif;
  }

  @media (min-width: 1000px) {
    :root {
      font-size: 62.5%;
    }
  }
`
