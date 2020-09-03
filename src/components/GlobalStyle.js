import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed';
  letter-spacing: 1px;
  /* padding: 20px 60px; */
  background: -webkit-gradient(linear, 77% 18%, 10% 21%, from(#b9d7ea), to(#769fcd));

  @media(max-width: 800px) {
    padding: 30px;
  }
}

h1 {
  text-align: center;
  margin: 60px 0px 30px 0px;
  font-size: 40px;
  color: #41444b;

  @media(max-width: 800px) {
    margin-top: 0px;
  }
}
`
