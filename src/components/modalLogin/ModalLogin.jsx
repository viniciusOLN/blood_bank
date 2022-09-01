import Modal from "../modal/Modal"
import {TitleLogin, BrandLogo, DivLogin, CreateAccount} from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import TextInput from "../textInput/TextInput";
import ButtonDefault from "../button/Buton";
import { useState } from 'react'

const ModalLogin = (props) => {
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [fields, setFields] = useState({ email: '', password: '', hidePassword: false })
  const [apiError, setApiError] = useState('')

  const setField = (text, field) => {
    setFields((fields) => ({... fields, [field]: text}))
  }

  const validateForm = () => {
    setApiError('')

    let inputEmail = (fields.email === '') ? 'Campo de Email vazio!' : ''
    let inputPassword = (fields.password === '') ? 'Campo de senha vazio!' : ''

    setErrors(errors => ({...errors,  email: inputEmail, password: inputPassword}))

    return (fields.email !== '' && fields.password !== '')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

   if(validateForm()){
    fetch('http://127.0.0.1:8000/blood_bank/login/' , {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // Autorization: 'Token ${props.token}' ,
      body: JSON.stringify({
        email: fields.email,
        password: fields.password
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

  const handleHiddePassword = () => setFields((fields) => ({ ... fields, hidePassword: !fields.hidePassword}))

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
            value = { fields.email } 
            validate = { errors.email }
            type='Email' 
            name='email' 
            placeholder='Email'
            onChange = {(e) => setField(e.target.value, 'email')}
          />    
          <TextInput 
            value = { fields.password } 
            validate = { errors.password }
            type={ fields.hidePassword ? 'Text' : 'Password' }
            name='password'
            icon ={ fields.hidePassword ? 'ri-eye-off-line' : 'ri-eye-line' }
            onClickIcon={ handleHiddePassword } 
            placeholder='Senha'
            onChange = {(e) => setField(e.target.value, 'password')}
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