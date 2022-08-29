import Modal from "../modal/Modal"
import {TitleLogin, BrandLogo, DivLogin, CreateAccount} from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import TextInput from "../textInput/TextInput";
import ButtonDefault from "../button/Buton";
import { useState } from 'react'

const ModalLogin = () => {
  
  const [valueInputEmail, setValueInputEmail] = useState('')
  const [valueInputPassword, setValueInputPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(valueInputEmail)
    console.log(valueInputPassword)
  }

  return (
    <Modal title='adad'>
     <TitleLogin>Login</TitleLogin>
      <BrandLogo>
        <img src={navbarIcon} alt="Blood Bank Logo System" title='Sistema de coleta de sangue'/>
      </BrandLogo>
      <DivLogin>
        <form onSubmit={handleSubmit}>
          <TextInput value = {valueInputEmail} name='email' setValueInput = {setValueInputEmail} placeholder='Email'/>
          <TextInput value = {valueInputPassword} name='password' setValueInput = {setValueInputPassword} placeholder='Senha'/>
          <ButtonDefault title='Entrar' />
        </form>
        <CreateAccount>
          Não possui uma conta ainda? <a href='/createAccount'>Crie uma aqui!</a>
        </CreateAccount>
      </DivLogin>
    </Modal>
  )
}

export default ModalLogin