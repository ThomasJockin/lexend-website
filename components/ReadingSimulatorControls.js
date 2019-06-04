import texts from '../data/texts'
import styled from '@emotion/styled'
import { useContext } from 'react'
import TypeChoicesContext from '../lib/useTypeChoices'

const ReadingSimulatorControls = ({ family, changeFamily, text, setText, disabled = [], wpm, setWPM, started, on, off }) => {
  const changeText = ({target}) => setText(target.value)
  return (
    <ControlBar>
      <label>
        Avg Words per minute ({wpm}) <br/>

        <input
          type="range" min="50" max="400" step="50" value={wpm}
          onChange={({ target }) => setWPM(target.value)}
          onMouseDown={off}
          onMouseUp={on}
          />

      </label>
      <Select disabled={disabled.includes('texts')} onChange={changeText}>
        {
          texts.map((_, i) => <option value={i} selected={text == i}>Text #{i}</option>)
        }
      </Select>
      <Select onChange={changeFamily} disabled={disabled.includes('family')}>
        <option value="Times New Roman" selected={family === 'Times New Roman'}>Times New Roman</option>
        <option value="Lexend" selected={family === 'Lexend'}>Lexend</option>
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
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  padding-bottom: 1em;
  margin-bottom: 3em;
  input {
    cursor: grab;
  }
`

const Select = styled('select')`
margin-right: 0.618rem;
`

const Button = styled("button")`
font-family: "Lexend", Helvetica, Arial, sans-serif;
text-transform: uppercase;
letter-spacing: 2px;
cursor: pointer;
appearance: none;
border: none;
border-radius: 3px;
padding: 0.618em 1em;
transition: all 300ms ease-in;
&:focus { outline: none; }
background: ${props => props.started ? 'white' : 'red'};
color: ${props => props.started ? 'black' : 'white'};
`

export default ReadingSimulatorControls
