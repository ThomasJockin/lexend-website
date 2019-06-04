import { css, Global } from '@emotion/core'
import Head from 'next/head'
import Nav from './Nav'
import Logo from './Logo'

const global = css`
  @font-face {
      font-family: 'Lexend';
      src: url('static/fonts/lexendgx.woff2') format('woff2'),
           url('static/fonts/lexendgx.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-optical-sizing: auto;
  }

  html,
  body {
    padding: 0 0;
    margin: 0;
    background: white;
    min-height: 100%;
    font-family: "Lexend", Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.4;
  }
  body {
    padding: 0 1rem;
  }
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default ({ children }) => {
  return (
    <>
      <Global
        styles={global}
      />
      <Head>
        <title>Lexend — A Font for Reading</title>
      </Head>
      <Nav>
        <Logo/>
      </Nav>
      { children }
    </>
  )
}
