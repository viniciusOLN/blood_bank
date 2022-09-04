import styled from 'styled-components'

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
    width: 350px;
    margin-bottom: 40px;
  }

  p{
    font-weight: 600;
    margin-top: 20px;
  }
`

const DivHowDonateBlood = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 250px;
  margin-top: 100px;
`

const DivContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: var(--title-white);

  img{
    width: 500px;
  }
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
  }
`

const DivButton = styled.div`
  width: 200px;
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