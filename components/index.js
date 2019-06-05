import styled from '@emotion/styled'
import { css } from '@emotion/core'


export const Flex = styled('section')`
display: flex;
flex-wrap: wrap;
margin: 4rem auto;
align-items: flex-start;
`

export const Right = styled('main')`
margin: 1rem auto;
max-width: ${ props => props.width || '45%'};
width: ${ props => props.width || 'auto'};
min-width: 400px;
${ props => props.sticky && css`
  position: sticky;
  top: ${ props.top || '1rem'};
`}
@media (max-width: 960px) {
  max-width: 100%;
  position: static;
}
`

export const Left = styled('main')`
margin: 2.618rem auto;
max-width: ${ props => props.width || '45%'};
width: ${ props => props.width || 'auto'};
${ props => props.sticky && css`
  position: sticky;
  top: ${ props.top || '1rem'};
`}
@media (max-width: 960px) {
  max-width: 100%;
  position: static;
}
`

export const Sidebar = styled('sidebar')`
min-width: ${props => props.minWidth || '500px'};
max-width: 40%;
position: sticky;
height: 90vh;
padding: ${props => props.padding || '0 2rem 3rem'};
margin: ${props => props.margin || '0'};
top: ${props => props.top || '2rem'};
@media (max-width: 970px) {
  min-width: 320px;
  max-width: 540px;
  position: static;
  margin: 0 auto 0;
  padding: 0.192rem;
}
`

export const Intro = styled('section')`
  padding: 1rem;
  h1 {
    font-size: 7.2rem;
    line-height: 1.1;
    margin: 14vh 3.618vw 3.618rem;
    font-weight: normal;
    strong {
      color: red;
      font-weight: normal;
    }
    @media (max-width: 960px) {
      width: 100%;
      font-size: 4.2rem;
      margin-left: 0;
      margin-right: 0;
    }
  }
  h2, h3, h4, h5, h6 {
    font-weight: normal;
    max-width: 60%;
    margin: 1rem auto 0.618rem;
    line-height: 1.5;
  }
  h2 {
    font-size: 2.4rem;
    line-height: 1.4;
    @media (max-width: 960px) {
      max-width: 100%;
    }
  }
  h6 {
    max-width: 30%;
    margin: 0 auto;
    font-variation-settings: 'LXND' 20;
    @media (max-width: 960px) {
      max-width: 88%;
    }
    a {
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
  }

  p {
    font-variation-settings: 'LXND' 10;
    color: rgba(0,0,0,0.76);
    line-height: 1.6;
    font-size: 1.2rem;
    max-width: 840px;
    margin: 2rem auto;
  }
  img {
    display: block;
    max-width: 500px;
  }
  a {
    color: red;
  }
  blockquote {
    font-weight: normal;
    display: block;
    max-width: 760px;
    background: white;
    padding: 0.618rem 2.618rem;
    margin: 4rem auto 1rem;
    position: relative;
    left: -2rem;
    border: 0.618rem solid red;
    @media (max-width: 960px) {
      max-width: 100%;
      left: 0;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.618;
    }
    &:before {
      font-weight: normal;
      content:"“";
      font-size: 9.6rem;
      position: absolute;
      top: -4.618rem;
      left: 1.618rem;
      color: black;
    }
    &:after {
      font-weight: normal;
      content:"”";
      font-size: 9.6rem;
      position: absolute;
      bottom: -8.618rem;
      right: 1.618rem;
      color: black;
    }
    img {
      max-width: 400px;
      position: absolute;
      right: -40%;
      bottom: -4%;
      filter: drop-shadow(0.618rem 0.618rem 0.392rem rgba(0,0,0,0.12));
      @media (max-width: 960px) {
        max-width: 220px;
        position: static;
        margin-top: -8rem;
        margin-left: 4rem;
      }
    }
  }
`
