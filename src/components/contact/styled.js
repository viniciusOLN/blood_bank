import styled from 'styled-components'

const DivSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.div`
  color: var(--title-black);
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 100px;
`

const DivForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 100px;
`

const DivContent = styled.div`
  width: 50%;
`

const Form = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: end;
`

export { DivSection, Title, DivForm, DivContent, Form }