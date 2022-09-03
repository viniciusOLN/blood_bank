import styled from 'styled-components'

const DivPresentation = styled.div`
  width: 100%;
  padding: 10px 150px 0px 150px;
  display: flex;
`

const DivContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  img{
    align-self: end;
  }
`

const DivButton = styled.div`
  width: 30%;
`

const TitlePresentation = styled.h2`
  color: var(--title-black);
  font-size: 28px;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 30px;
`
const TextPresentation = styled.p`
  color: var(--text-black);
  font-size: 28px;
  font-weight: 500;
  line-height: 30pt;
  margin-bottom: 30px;
  width: 80%;
`

const DivWave = styled.div`
  pointer-events: none;
  width: 100%;

  img{
    width: 100%;
  }
`

export { DivPresentation, TitlePresentation, TextPresentation, DivContent, DivButton, DivWave }