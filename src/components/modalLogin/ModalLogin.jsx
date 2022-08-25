import Modal from "../modal/Modal"
import {TitleLogin, BrandLogo, DivLogin, CreateAccount} from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import TextInput from "../textInput/TextInput";
import ButtonDefault from "../button/Buton";

const ModalLogin = () => {
  return (
    <Modal title='adad'>
     <TitleLogin>Login</TitleLogin>
      <BrandLogo>
        <img src={navbarIcon} alt="Blood Bank Logo System" title='Sistema de coleta de sangue'/>
      </BrandLogo>
      <DivLogin>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Senha'/>
        <ButtonDefault title='Entrar' />
        <CreateAccount>
          Não possui uma conta ainda? <a href='/createAccount'>Crie uma aqui!</a>
        </CreateAccount>
      </DivLogin>
    </Modal>
  )
}

export default ModalLogin