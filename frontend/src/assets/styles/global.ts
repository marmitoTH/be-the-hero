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
    background: #F0F0F5;
  }

  body, input, text-area {
    font: 1rem 'Roboto', sans-serif;
  }

  @media (min-width: 1000px) {
    :root {
      font-size: 62.5%;
    }
  }
`
