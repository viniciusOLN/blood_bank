import styled from 'styled-components'

const TABLET_SIZE = 1210;
const PHONE_SIZE = 1052;
const SMALL_SIZE = 945;

const DivPresentation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DivContent = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${SMALL_SIZE}px){
    width: 100%;
    flex-direction: column;
    justif-content:center;
    align-items: start;
    padding: 0px 20px;
    
    img{
      width: 80%;
    }
  }

  @media (max-width: ${TABLET_SIZE}px){
    h2{
      font-size: 26px;
    }
    
    p{
      font-size: 24px;
      width: 100%;
    }
  }
`

const DivButton = styled.div`
  width: 30%;

  @media (max-width: ${PHONE_SIZE}px){
    width: 40%;
   }

  @media (max-width: ${SMALL_SIZE}px){
   width: 100%;
  }
  
  
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

const DivUtils = styled.div`
  display: flex;
  width: 1130px;

  img{
    align-self: center;
    width: auto;
  }

  @media (max-width: ${TABLET_SIZE}px){
    width: 1000px;
  }

  @media (max-width: ${PHONE_SIZE}px){
    width: 900px;
  }

  @media (max-width: ${SMALL_SIZE}px){
    width: auto;
    flex-direction: column;
    justif-content:center;
    align-items: center;
    padding: 0px 20px;

    img{
      width: 75%;
    }
  }
`

export { DivPresentation, TitlePresentation, TextPresentation, DivContent, DivButton, DivWave, DivUtils }