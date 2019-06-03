import styled from '@emotion/styled'


export const Container = styled('section')`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`
export const Right = styled('main')`
grid-column: ${props => props.grid || 'span 2'};
margin: 1rem;
h2 {
  font-size: 3.6rem;
  line-height: 1.2;
  margin-top: 10vh;
}
h3 {
  font-size: 1.4rem;
  margin: 3rem 0 0.618rem;
}
h6 {
  color: #A9A9A9;
  a {
    color: #808080;
  }
}
p {
  color: rgba(0,0,0,0.76);
  max-width: 700px;
  line-height: 1.6;
}
ul, ol {
  color: rgba(0,0,0,0.76);
  max-width: 700px;
  line-height: 1.6;
  li {
    margin: 0.618rem 0 0.392rem;
  }
}
`

export const Left = styled('main')`
grid-column: ${props => props.grid || '1 / 3'};
margin: 2.618rem;
h2 {
  font-size: 3.6rem;
  line-height: 1.2;
  margin-top: 10vh;
}
h3 {
  font-size: 1.4rem;
  margin: 3rem 0 0.618rem;
}
h6 {
  color: #A9A9A9;
  a {
    color: #808080;
  }
}
p {
  color: rgba(0,0,0,0.76);
  max-width: 700px;
  line-height: 1.6;
}
ul, ol {
  color: rgba(0,0,0,0.76);
  max-width: 700px;
  line-height: 1.6;
  li {
    margin: 0.618rem 0 0.392rem;
  }
}
`

export const Sidebar = styled('sidebar')`
grid-column: ${props => props.grid || '1 / 3'};
max-width: 40vw;
position: sticky;
top: 2rem;
height: 90vh;
margin-bottom: 3rem;
margin-top: ${props => props.marginTop || 0};
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
  }
  h2, h3, h4, h5, h6 {
    max-width: 50%;
    margin: 1rem auto 0.618rem;
  }
  p {
    font-size: 1.4rem;
    max-width: 840px;
    margin: 2rem auto;
  }
  img {
    display: block;
    max-width: 500px;
  }
  blockquote {
    display: block;
    max-width: 45%;
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
    }
  }
`
