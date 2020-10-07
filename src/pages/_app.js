
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import store from '../redux/store';


const GlobalStyle = createGlobalStyle`
  body {
    font-family:Helvetica, sans-serif;
    margin:0px;
    padding: 20px;
    background-color: #151515;
    color: whitesmoke;
  }
`


export default function App({ Component, pageProps }) {

  return <Provider store={store}>
    <GlobalStyle />
    <Component {...pageProps} />
  </Provider>
}