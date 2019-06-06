import texts from '../data/texts'
import styled from '@emotion/styled'
import { useContext } from 'react'
import TypeChoicesContext from '../lib/useTypeChoices'

const ReadingSimulatorControls = ({ family, changeFamily, text, setText, disabled = [], wpm, setWPM, started, on, off }) => {
  const changeText = ({target}) => setText(target.value)
  return (
    <ControlBar>
      <WPMBar>
        <label>
          Avg WPM ({wpm})
        </label>
        <input
          type="range" min="50" max="400" step="50" value={wpm}
          onChange={({ target }) => setWPM(target.value)}
          onMouseDown={off}
          onMouseUp={on}
          />
      </WPMBar>
      <Select key="texts" disabled={disabled.includes('texts')} onChange={changeText} value={text}>
        {
          texts.map((_, i) => <option key={`text-${i}`} value={i}>Text #{i}</option>)
        }
      </Select>
      <Select key="family" onChange={changeFamily} disabled={disabled.includes('family')}
      value={family}>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Lexend">Lexend</option>
      </Select>
      <Button
        onClick={() => started ? off() : on() }
        started={started}
      >
        { started ? 'Stop' : 'Start'}
      </Button>
    </ControlBar>
  )
}

const ControlBar = styled('nav')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  padding-bottom: 1em;
  margin-bottom: 3em;
  input {
    cursor: grab;
    width: 100%;
  }
  label {
    max-width: 20%;
    margin-left: 4px;
  }
`

const Select = styled('select')`
  -webkit-appearance:none;
  height: 35px;
  background: white;
  padding: 0 0.192rem;
  font-size: 1.1em;
  &:not([disabled]) {
    cursor: pointer;
  }
  margin-left: 10px;
  border: none;
  outline: none;
`
const WPMBar = styled('div')`
max-width: 30%;
`

const Button = styled("button")`
-webkit-appearance:none;
font-family: "Lexend", Helvetica, Arial, sans-serif;
text-transform: uppercase;
letter-spacing: 2px;
cursor: pointer;
appearance: none;
border: none;
border-radius: 3px;
padding: 0.618em 1em;
transition: all 300ms ease-in;
outline: none;
min-width: 70px;
background: ${props => props.started ? 'white' : 'red'};
color: ${props => props.started ? 'black' : 'white'};
@media (max-width: 1020px) {
  width: 100%;
  margin-top: 0.392rem;
}
`

export default ReadingSimulatorControls
