import { css, Global } from '@emotion/core'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
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
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
    font-family: "Lexend", Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.4;
    overflow-x: hidden;
    @media (max-width: 640px) {
      font-size: 14px;
    }
  }
  body {
    padding: 0 1rem;
  }
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
  h2 {
    font-size: 2.7rem;
    line-height: 1.2;
    margin-top: 10vh;
    span {
      font-size: 30%;
    }
  }
  h3 {
    font-size: 1.4rem;
    margin: 3rem 0 0.618rem;
  }
  h6 {
    color: #A9A9A9;
    font-variation-settings: 'LXND' 20;
  }
  a {
    color: red;
    font-variation-settings: 'LXND' 80;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    &:before {
      content: "⌁";
      margin: 0 0.192rem;
      font-size: 140%;
    }
  }
  p {
    max-width: 700px;
    color: rgba(0,0,0,0.76);
    line-height: 1.6;
  }
  ul, ol {
    color: rgba(0,0,0,0.76);
    max-width: 960px;
    width: 100%;
    line-height: 1.6;
    padding: 0 0 0 0.618rem;
    @media (max-width: 960px) {
      padding-left: 1rem;
    }
    li {
      max-width: 100%;
      margin: 0.618rem 0 0.392rem;
    }
  }
  pre {
    display: block;
    width: 100%;
    background: rgba(0,0,0,0.06);
    border-radius: 0.292rem;
    padding: 0.618rem;
    border: 1px solid rgba(0,0,0,0.08);
  }
  code {
    display: block;
    width: 100%;
    font-size: 0.8rem;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 0.192rem;
    padding: 0.392rem 0.618rem;
    background: white;
    overflow-x: auto;
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
      <Footer/>
    </>
  )
}
