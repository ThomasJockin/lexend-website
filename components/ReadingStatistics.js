import ReadingSimulatorContext from '../lib/useReadingSimulator'
import { useContext } from 'react'
import styled from '@emotion/styled'
import ms from 'ms'
import prettyMs from 'pretty-ms'



export const TotalNumberOfWords = () => {
  const { words } = useContext(ReadingSimulatorContext)
  return words.length
}

export const TotalAmountOfTime = ({ as }) => {
  const { words, wpm } = useContext(ReadingSimulatorContext)
  if (as === "seconds") {
    return (words.length / wpm).toFixed(1) * 60
  }
  if (as === "decimal") {
    return (words.length / wpm).toFixed(1)
  }
  return prettyMs((words.length / wpm).toFixed(1) * 60000)
}

export const TotalNumberOfErrors = () => {
  const { errors } = useContext(ReadingSimulatorContext)
  return errors.length
}

export const TotalNumberOfCorrectWords = () => {
  const { words, errors } = useContext(ReadingSimulatorContext)
  return words.length - errors.length
}

export const TotalWordsCorrectPerMinute = () => {
  return (TotalNumberOfCorrectWords() / TotalAmountOfTime({ as: "decimal" })).toFixed()
}



export const CorrectWordsPerMinute = (correctWords, time) => {
  const overTime = (correctWords / time) || 0
  // 60000 ms in a minute
  return Math.ceil(overTime * 60000)
}

const ReadingStatistics = ({ words, wpm, timer, errors, index }) => {
  const minutes = (words.length / wpm).toFixed(2)
  const milliseconds = ms(`${minutes} min`)
  const currentErrors = errors.filter(e => e <= index).length || 0
  const cwpm = CorrectWordsPerMinute(index - currentErrors, timer)
  return (
    <Bar>
        <Stats>
          <strong>Time to read:</strong> {prettyMs(timer)}
        </Stats>
        <Stats>
          {index} <strong>words read </strong>
           - {currentErrors} <strong>errors </strong>
           =
           <h5>{cwpm} <strong>Actual Words Correct per Minute</strong></h5>
        </Stats>
    </Bar>
  )
}

const Bar = styled('div')`
display: flex;
width: 100%;
align-items: flex-start;
justify-content: space-between;
border-top: 1px solid rgba(0,0,0,0.12);
padding-top: 1em;
margin-top: auto;
`

const Stats = styled('div')`
  margin: 0 0 1rem;
  text-align: right;
  h5 {
    margin: 0;
    font-size: 1rem;
  }
`

export default ReadingStatistics
