import styled from 'styled-components'

const TABLET_SIZE = 1210;
const PHONE_SIZE = 1052;
const SMALL_SIZE = 945;

const DivSection = styled.div`
  background-color: var(--primary-color);
  position: relative;
  top: -3px;
  padding-bottom: 150px;
`

const TitleSection = styled.h2`
  color: var(--title-white);
  font-size: 26px;
  text-align: center;
  font-weight: bold;
`

const DivReasonsWhy = styled.div`
  width: 100%;
  display: flex;
  align-itens: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 160px;
  flex-wrap: wrap;
`

const DivReason = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--title-white);
  margin: 25px 50px;

  img{
    width: 100%;
    margin-bottom: 40px;
  }

  p{
    font-weight: 600;
    margin-top: 20px;

    @media(max-width: ${SMALL_SIZE}px){
      text-align: center;
    }
  }
`

const DivHowDonateBlood = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;

  img{
    width: 500px;
    margin-bottom: 80px;
    
    @media(max-width: ${TABLET_SIZE}px){
      width: 400px;
    }

    @media(max-width: ${PHONE_SIZE}px){
      width: 50%;
    }

    @media(max-width: ${SMALL_SIZE}px){
      width: 80%;
    }
  }

  @media(max-width: ${SMALL_SIZE}px){
    flex-direction: column;
    width: 80%;
    margin-bottom: 0px;
  }
`

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: var(--title-white);
`
const DivContentText = styled.div`
  color: var(--title-white);
  padding-left: 180px;
  display: flex;
  flex-direction: column;

  p{
    line-height: 26pt;
    font-size: 25px;
    width: 400px;
    margin-bottom: 30px;

    @media(max-width: ${PHONE_SIZE}px){
      font-size: 20px;
    }

    @media(max-width: ${SMALL_SIZE}px){
      width: 100%;
    }
  }

  
  @media(max-width: ${SMALL_SIZE}px){
    width: 100%;
    align-items: center;
    padding-left: 0;
  }
`

const DivButton = styled.div`
  width: 200px;

  @media(max-width: ${SMALL_SIZE}px){
    width: 100%;
  }
`

const DivWave = styled.div`
  pointer-events: none;
  width: 100%;
  position: relative;
  bottom: 3px;
 

  img{
    width: 100%;
  }
`

export { 
  TitleSection, 
  DivSection, 
  DivReasonsWhy, 
  DivReason, 
  DivHowDonateBlood, 
  DivContent, 
  DivButton, 
  DivContentText, 
  DivWave, 
}