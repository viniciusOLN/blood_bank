import Modal from "../modal/Modal"
import {TitleLogin, BrandLogo, DivLogin, CreateAccount} from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import TextInput from "../textInput/TextInput";
import ButtonDefault from "../button/Buton";
import { useState } from 'react'

const ModalLogin = (props) => {
  const [valueInputEmail, setValueInputEmail] = useState('')
  const [valueInputPassword, setValueInputPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(false)
  const [error, setError] = useState({
    email: '',
    password: '',
  })
  const [apiError, setApiError] = useState('')

  const validateForm = () => {
    setApiError('')

    let inputEmail = (valueInputEmail === '') ? 'Campo de Email vazio!' : ''
    let inputPassword = (valueInputPassword === '') ? 'Campo de senha vazio!' : ''

    setError(error => ({...error, email: inputEmail}))
    setError(error => ({...error, password: inputPassword}))

    return (valueInputEmail !== '' && valueInputPassword !== '')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

   if(validateForm()){
    fetch('http://127.0.0.1:8000/blood_bank/login/' , {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // Autorization: 'Token ${props.token}' ,
      body: JSON.stringify({
        email: valueInputEmail,
        password: valueInputPassword
     }),
    }).then( data => data.json())
    .then(
      data => {
        if(data.token) props.userLogin(data.token)
        setApiError(data)
      }
    ).catch( (error) => {
      console.error(error.responseCode)
    })
   }

  }

  const handleHiddePassword = () => setHidePassword(!hidePassword)

  return (
    <Modal>
     <TitleLogin>Login</TitleLogin>
      <BrandLogo>
        <img src={ navbarIcon } alt="Blood Bank Logo System" title='Sistema de coleta de sangue'/>
      </BrandLogo>
      <DivLogin>
        <p className='errorApi'>{apiError}</p>
        <form onSubmit={ handleSubmit }>
          <TextInput
            value = { valueInputEmail } 
            validate = { error.email }
            type='Email' 
            name='email' 
            setValueInput = { setValueInputEmail } 
            placeholder='Email'
          />    
          <TextInput 
            value = { valueInputPassword } 
            validate = { error.password }
            type={ hidePassword ? 'Text' : 'Password' }
            name='password'
            icon ={ hidePassword ? 'ri-eye-off-line' : 'ri-eye-line' }
            onClickIcon={ handleHiddePassword } 
            setValueInput = { setValueInputPassword }
            placeholder='Senha'
          />
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