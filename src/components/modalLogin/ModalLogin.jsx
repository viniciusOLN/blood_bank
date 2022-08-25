import Modal from "../modal/Modal"
import {TitleLogin, BrandLogo} from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import TextInput from "../textInput/TextInput";

const ModalLogin = () => {
  return (
    <Modal title='adad'>
     <TitleLogin>Login</TitleLogin>
      <BrandLogo>
        <img src={navbarIcon} alt="Blood Bank Logo System" title='Sistema de coleta de sangue'/>
      </BrandLogo>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='Senha'/>
    </Modal>
  )
}

export default ModalLogin