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
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/static/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/static/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#b91d47"/>
        <meta name="msapplication-config" content="/static/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Nav>
        <Logo/>
      </Nav>
      { children }
    </>
  )
}
