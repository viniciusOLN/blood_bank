import styled from 'styled-components'

const TABLET_SIZE = 1210;
const PHONE_SIZE = 1052;
const SMALL_SIZE = 945;

const DivSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${SMALL_SIZE}px){
    padding: 0px 10px;
    h2{
      font-size: 20px;
      text-align: center;
    }
  }

`
const Title = styled.h2`
  color: var(--title-black);
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 100px;
`

const DivForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${TABLET_SIZE}px){
    flex-direction: column;
    width: 50%;
  }

  @media (max-width: ${SMALL_SIZE}px){
    width: 100%;
  }

  img{
    width: 40%;
    margin-right: 50px;

    @media (max-width: ${TABLET_SIZE}px){
      width: 70%;
      margin-bottom: 50px;
    }

    @media (max-width: ${SMALL_SIZE}px){
      width: 70%;
      margin-bottom: 50px;
    }
  }
`

const DivContent = styled.div`
  width: 50%;
`

const Form = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: ${TABLET_SIZE}px){
    width: 100%;
  }

  @media (max-width: ${SMALL_SIZE}px){
    width: 80%;
  }
`

export { DivSection, Title, DivForm, DivContent, Form }