import { 
  TitleSection, 
  DivSection, 
  DivReasonsWhy, 
  DivReason, 
  DivHowDonateBlood, 
  DivContent, 
  DivButton, 
  DivContentText, 
  DivWave,
} from "./styled"
import reasonOne from '../../assets/images/whyDonateBloodReasonOne.svg'
import reasonTwo from '../../assets/images/whyDonateBloodReasonTwo.svg'
import reasonThree from '../../assets/images/whyDonateBloodReasonThree.svg'
import howDonate from '../../assets/images/howDonateBlood.svg'
import ButtonDefault from "../button/Buton"
import waveDown from '../../assets/images/wave-down.svg'

function WhyDonateBlood(){

  const reasonsWhyDonate = [
    { img: reasonOne, text: 'Uma única doação pode salvar 4 vidas!' },
    { img: reasonTwo, text: 'O processo de doação é completamente seguro!' },
    { img: reasonThree, text: 'O doador tem direito a um dia de folga no trabalho!' },
  ]

  const handleDonation = () => {

  }

  return (
    <>
      <DivSection>
        <TitleSection>Por que doar sangue?</TitleSection>
        <DivReasonsWhy>
          {
            reasonsWhyDonate.map((item) => {
                return <DivReason key= 'img'>
                  <img src={item.img} />
                  <p>{item.text}</p>
                </DivReason>
              }
            )
          }
        </DivReasonsWhy>
        <TitleSection>Como doar sangue?</TitleSection>
        <DivHowDonateBlood>
          <DivContent>
            <img src={howDonate} />
          </DivContent>
          <DivContentText>
            <p>
            A doação é feita em um dos postos especializados de doação da sua cidade. Através do site é possível marcar a visita em um posto próximo e fazer a doação.
            </p>
            <DivButton>
              <ButtonDefault title="Fazer doação" onClick={handleDonation}/>
            </DivButton>   
          </DivContentText>
        </DivHowDonateBlood>
    </DivSection>
    <DivWave>
      <img src={waveDown} />
    </DivWave>
  </>
  )
}

export default WhyDonateBlood