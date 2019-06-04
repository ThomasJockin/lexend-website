import styled from '@emotion/styled'
import { css } from '@emotion/core'


export const Container = styled('section')`
display: flex;
flex-wrap: wrap;
margin: 4rem auto;
`

const main = css`
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
}
a {
  color: red;
}
p {
  max-width: 700px;
  color: rgba(0,0,0,0.76);
  line-height: 1.6;
}
ul, ol {
  color: rgba(0,0,0,0.76);
  max-width: 960px;
  line-height: 1.6;
  padding: 0 0 0 0.392rem;
  li {
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
}
`

export const Right = styled('main')`
margin: 1rem;
max-width: 50%;
${main}
@media (max-width: 960px) {
  width: 100%;
  max-width: 100%;
  margin: 0.192rem;
}
`

export const Left = styled('main')`
margin: 2.618rem;
max-width: 50%;
${main}
@media (max-width: 960px) {
  width: 100%;
  max-width: 100%;
  margin: 0.192rem;
}
`

export const Sidebar = styled('sidebar')`
max-width: 40vw;
min-width: 680px;
width: 100%;
position: sticky;
top: 2rem;
height: 90vh;
margin-bottom: 3rem;
margin-top: ${props => props.marginTop || 0};
@media (max-width: 960px) {
  position: static;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  margin-bottom: 0;
  margin-top: 1rem;
}
`

export const Intro = styled('section')`
  padding: 1rem;
  h1 {
    font-size: 7.2rem;
    line-height: 1.1;
    margin: 14vh 3.618vw 3.618rem;
    strong {
      color: red;
    }
    @media (max-width: 960px) {
      width: 100%;
      font-size: 4.2rem;
      margin-left: 0;
      margin-right: 0;
    }
  }
  h2, h3, h4, h5, h6 {
    max-width: 60%;
    margin: 1rem auto 0.618rem;
    line-height: 1.5;
  }
  h2 {
    font-size: 2.4rem;
    @media (max-width: 960px) {
      max-width: 100%;
    }
  }
  h6 {
    max-width: 30%;
    @media (max-width: 960px) {
      max-width: 88%;
    }
    margin: 0 auto;
  }

  p {
    color: rgba(0,0,0,0.76);
    line-height: 1.6;
    font-size: 1.4rem;
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
    display: block;
    max-width: 45%;
    @media (max-width: 960px) {
      max-width: 100%;
    }
    background: white;
    padding: 0.618rem 3rem;
    margin: 4rem auto 1rem;
    position: relative;
    border: 0.618rem solid red;
    p {
      font-size: 1.2rem;
      line-height: 1.618;
    }
    &:before {
      content:"“";
      font-size: 9.6rem;
      position: absolute;
      top: -4.618rem;
      left: 1.618rem;
      color: black;
    }
    &:after {
      content:"”";
      font-size: 9.6rem;
      position: absolute;
      bottom: -8.618rem;
      right: 1.618rem;
      color: black;
    }
    img {
      float: right;
      margin-right: -18rem;
      margin-top: -5rem;
      max-width: 400px;
      filter: drop-shadow(0.618rem 0.618rem 0.392rem rgba(0,0,0,0.12));
      @media (max-width: 960px) {
        float: none;
        margin-top: -7rem;
      }
    }
  }
`
