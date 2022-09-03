import styled from 'styled-components'

const DivSection = styled.div`
  background-color: var(--primary-color);
  position: relative;
  top: -3px;
`

const TitleSection = styled.h2`
  color: var(--title-white);
  font-size: 26px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 100px;
`

const DivReasonsWhy = styled.div`
  width: 100%;
  display: flex;
  align-itens: center;
  justify-content: center;
  margin-bottom: 200px;
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
  padding: 0px 200px;
  
`

const DivContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  img{
    width: 500px;
  }

`

export { TitleSection, DivSection, DivReasonsWhy, DivReason, DivHowDonateBlood, DivContent }