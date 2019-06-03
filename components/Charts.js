import styled from "@emotion/styled"
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  Label, LabelList, ResponsiveContainer
} from 'recharts'

import data from '../data/TNRvsLXND'

const Charts = () => {
  return (
    <Container>
    <ResponsiveContainer>
    <BarChart
            width={500}
            height={300}
            data={data}
            barCategoryGap="5"
          >
            <CartesianGrid strokeDasharray="3" />
            <Legend
              iconType="circle" align="right" verticalAlign="bottom"

              />
            <XAxis dataKey="Student" orientation="top" axisLine={false} angle="0" style={{ fontSize: '0.8rem' }}/>
            <YAxis>
              <Label angle={-90}>Accurate Words per Minute</Label>
            </YAxis>
            <Tooltip
              cursor={false}
              formatter={(value, name, props) => `${value} wpm`}/>

            <Bar dataKey="Times New Roman" fill="#8884d8"></Bar>
            <Bar dataKey="Lexend" fill="red"></Bar>
          </BarChart>
    </ResponsiveContainer>
    </Container>
  )
}

const Container = styled('section')`
width: auto;
height: 80vh;
padding: 2rem;
`

export default Charts
