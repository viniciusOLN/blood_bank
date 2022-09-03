import { TitleSection, DivSection, DivReasonsWhy, DivReason, DivHowDonateBlood, DivContent } from "./styled"
import reasonOne from '../../assets/images/whyDonateBloodReasonOne.svg'
import reasonTwo from '../../assets/images/whyDonateBloodReasonTwo.svg'
import reasonThree from '../../assets/images/whyDonateBloodReasonThree.svg'
import howDonate from '../../assets/images/howDonateBlood.svg'

function WhyDonateBlood(){
  return (
    <>
      <DivSection>
        <TitleSection>Por que doar sangue?</TitleSection>
        <DivReasonsWhy>
          <DivReason>
            <img src={reasonOne} />
            <p>Uma única doação pode salvar 4 vidas!</p>
          </DivReason>
          <DivReason>
            <img src={reasonTwo} />
            <p>O processo de doação é completamente seguro!</p>
          </DivReason>
          <DivReason>
            <img src={reasonThree} />
            <p>O doador tem direito a um dia de folga no trabalho!</p>
          </DivReason>
        </DivReasonsWhy>
        <TitleSection>Como doar sangue?</TitleSection>
        <DivHowDonateBlood>
          <DivContent>
            <img src={howDonate} />
          </DivContent>
          <DivContent>
            <p>
            A doação é feita em um dos postos especializados de doação da sua cidade. Atravpés do site é possível marcar a doalção em um posto próxmo e fazer a doação
            </p>
          </DivContent>
      </DivHowDonateBlood>
      </DivSection>
      
    </>
  )
}

export default WhyDonateBlood