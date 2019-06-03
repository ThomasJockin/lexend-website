import { useContext } from 'react'
import useTypeChoices from '../lib/useTypeChoices'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import useVariableFont from "react-variable-fonts"
import Markdown from 'markdown-to-jsx';
import texts from '../data/texts'
import Page from './Page'

const initialSettings = {
    LXND: 0
}



const Tester = ({ weight, lxnd }) => {
  const { axis, setAxis, customStyles } = useContext(useTypeChoices)

  switch (weight) {
    case "default":
      lxnd = 0
      break;
    case "regular":
      lxnd = 0
      break;
    case "deca":
      lxnd = 40
      break;
    case "kilo":
      lxnd = 40
      break;
    case "mega":
      lxnd = 56
      break;
    case "giga":
      lxnd = 64
      break;
    case "tera":
      lxnd = 72
      break;
    case "peta":
      lxnd = 80
      break;
    case "exa":
      lxnd = 100
      break;
    default:
      lxnd = axis
  }

  const style = {
    fontVariationSettings: `'LXND' ${lxnd}`
  }

  const exampleCSS = `h1, p { font-variation-settings: 'LXND' ${axis.LXND}; }`
  return (
    <div>
      {weight && <Weight>{weight}</Weight>}
      <Title style={{ ...style }}>LEXEND</Title>
      <Container>
      {
        !weight &&
        <Controls>
          <p style={{ ...style }}></p>
          <label htmlFor="lxnd-axis">
            Variable Width + Bounding Box
          </label>
          <input
            id="lxnd-axis"
            type="range" min="0" max="100" value={axis.LXND}
            onChange={({ target }) => setAxis({ LXND: target.value })}
          />
          <label htmlFor="lxnd-axis">
            Variable Font Settings for CSS
          </label>
          <CSS>
            <code>{exampleCSS}</code>
          </CSS>
        </Controls>
      }

      </Container>
    </div>
  );
};

const Container = styled('section')`
  display: flex;
  margin-top: 0;
  margin-bottom: 4rem;
`
const Weight = styled('span')`
text-transform: uppercase;
font-size: 80%;
letter-spacing: 2px;
`

const Controls = styled('sidebar')`
  width: 50%;
  padding: 1rem 0.618rem;
  margin: 0;
  input {
    cursor: grab;
    width: 100%;
  }
  label {
    display: block;
    text-transform: uppercase;
    font-size: 0.718rem;
    letter-spacing: 2px;
    margin: 2.618rem 0 0.618rem;
  }
`

const CSS = styled('pre')`
  background: rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 0.192rem;
  padding: 0.618rem 1rem;
  font-size: 0.718rem;
  width: 100%;
`

const H1 = styled('h1')`
font-size: 6.4rem !important;
line-height: 1;
margin: 0;
padding: 0;
span {
  display: inline-block;
  margin: 2px;
  border: 1px dashed rgba(0,0,0, 0.12);
}
& + p {
  margin-left: 0.392rem;
}
`

const Title = ({ children, ...props }) => <H1>{children.split("").map((child, i) => <span key={`${child}-${i}`} {...props}>{child}</span>)}</H1>

export default Tester
