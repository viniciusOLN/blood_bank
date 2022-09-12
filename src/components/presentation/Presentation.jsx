import { DivPresentation, TitlePresentation, TextPresentation, DivContent, DivButton, DivWave, DivUtils } from './styled'
import imagePresentation from '../../assets/images/image-presentation.svg'
import waveUp from '../../assets/images/wave-up.svg'
import ButtonDefault from '../../components/button/Buton'
import ModalCreateAccount from '../../components/modalCreateAccount/ModalCreateAccount'
import { renderModal } from "../../utils/modalUtils";

const handleCreateAccount = () => {
  const modal = <ModalCreateAccount/>
  renderModal(modal)
}

function Presentation(){
  return (
    <>
      <DivPresentation>
				<DivUtils>
					<DivContent>
						<TitlePresentation>Doar sangue é um ato de amor!</TitlePresentation>
						<TextPresentation>
							Transfusões de sangue salvam milhares de pessoas todos os anos. 
							Vamos fazer parte desse ciclo do bem e doar sangue? Saiba como! 
						</TextPresentation>
						<DivButton>
							<ButtonDefault title='Cadastrar' theme='default' onClick={handleCreateAccount} />
						</DivButton>
					</DivContent>
					<img src={imagePresentation} alt="Doe sangue!" title="Doe sangue!"/>
				</DivUtils>
    	</DivPresentation>
			<DivWave>
			<img src={waveUp} />
			</DivWave>
    </>
  )
}

export default Presentation