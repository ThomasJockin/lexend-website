import styled from '@emotion/styled'

const Page = styled('div')`
  border: 1px solid rgba(0,0,0,0.24);
  padding: 2rem;
  margin: 2rem auto;
  font-size: 0.618rem;
  width: 75%;
  height: 76vh;
  overflow-y: auto;
  box-shadow: 0px 2px 0.392rem rgba(0,0,0,0.05);
  border-radius: 3px;
  p {
    line-height: 1.7;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`
export default Page
