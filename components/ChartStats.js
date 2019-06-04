import data from '../data/TNRvsLXND'
import styled from "@emotion/styled"

const avg = arr => arr.reduce((a,b) => a + b, 0) / arr.length

const max = arr => Math.max(...arr);

const Stats = () => {
  return (
    <StatsContainer>
      <Stat>
        <h3>17<span>/</span>19</h3>
        <p>had better scores with Lexend over Times New Roman</p>
      </Stat>

      <Stat>
        <h3>110</h3>
        <p>Avg WCPM for Times New Roman</p>
      </Stat>
      <Stat>
        <h3>127.8</h3>
        <p>Avg WCPM for Lexend</p>
      </Stat>
      <Stat>
        <h3><span>+</span>19.8<span>%</span></h3>
        <p>Avg Improvement in WCPM</p>
      </Stat>
      <Stat>
        <h3><span>+</span>47.2<span>%</span></h3>
        <p>Biggest Improvement in WCPM using Lexend</p>
      </Stat>
      <Stat>
        <h3><span>-</span>3.8<span>%</span></h3>
        <p>Biggest Regression in WCPM using Lexend</p>
      </Stat>

    </StatsContainer>
  )
}

const StatsContainer = styled('section')`
  display: flex;
  flex-wrap: wrap;
`
const Stat = styled('div')`
  margin: 0.618rem;
  border: 1px solid rgba(0,0,0,0.08);
  padding: 1rem;
  h3 {
     font-size: 4.8rem;
     margin: 0;
     line-height: 1;
  }
  p {
    color: rgba(0,0,0,0.7);
  }
  span {
    vertical-align: middle;
    padding: 0 0.192rem;
    font-size: 40%;
  }
`

export default Stats
