import Modal from "../modal/Modal"
import {TitleLogin, BrandLogo, DivLogin} from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import TextInput from "../textInput/TextInput";
import ButtonDefault from "../button/Buton";
import { useState } from 'react'

const ModalLogin = () => {
  const [apiError, setApiError] = useState('')
  const [passwordSecurity, setPasswordSecurity] = useState({ security: '', color: '' })
  const [error, setError] = useState({ email: '', birthdate: '', password: '', confirmPassword: '' })
  const [fields, setFields] = useState({ 
    email: '', 
    birthdate: '', 
    password: '', 
    confirmPassword: '', 
    hidePassword: false, 
    hideConfirmPassword: false
  })

  const validateForm = () => {
    setApiError('')
    setPasswordSecurity('')

    setError(error => {
      return {
        ...error, 
        email: (fields.email === '') ? 'Campo de Email vazio!' : '',  
        password: (fields.password === '') ? 'Preencha a data de nascimento!' : '', 
        birthdate: (fields.birthdate === '') ? 'Campo de senha vazio!' : '', 
        confirmPassword: (fields.confirmPassword === '') ? 'Campo vazio!' : ''  
      }
    })

    return (fields.email !== '' && fields.password !== '')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm()
  }

  const handleHiddePassword = () => setFields((fields) => ({ ... fields, hidePassword: !fields.hidePassword}))
  const handleHiddeConfirmPassword = () => setFields((fields) => ({ ... fields, hideConfirmPassword: !fields.hideConfirmPassword}))

  return (
    <Modal>
      <TitleLogin>Cadastro</TitleLogin>
      <BrandLogo>
        <img src={ navbarIcon } alt="Blood Bank Logo System" title='Sistema de coleta de sangue'/>
      </BrandLogo>
      <DivLogin>
        <p className='errorApi'>{apiError}</p>
        <form onSubmit={ handleSubmit }>
          <TextInput
            value = { fields.email } 
            validate = { error.email }
            type='Email' 
            name='email' 
            placeholder='Email'
            onChange = {(e) => setFields((fields) => ({... fields, email: e.target.value})) }
          />    
          <TextInput 
            value = { fields.birthdate } 
            validate = { error.birthdate }
            type='date'
            name='birthdate'
            placeholder='Data de Nascimento'
            onChange = {(e) => setFields((fields) => ({... fields, birthdate: e.target.value})) }
          />
           <TextInput 
            value = { fields.password } 
            validate = { error.password }
            type={ fields.hidePassword ? 'Text' : 'Password' }
            name='password'
            icon ={ fields.hidePassword ? 'ri-eye-off-line' : 'ri-eye-line' }
            onClickIcon={ handleHiddePassword } 
            placeholder='Senha'
            onChange = {(e) => setFields((fields) => ({... fields, password: e.target.value})) }
          />
           <TextInput 
            value = { fields.confirmPassword } 
            validate = { error.confirmPassword }
            type={ fields.hideConfirmPassword ? 'Text' : 'Password' }
            name='password'
            icon ={ fields.hideConfirmPassword ? 'ri-eye-off-line' : 'ri-eye-line' }
            onClickIcon={ handleHiddeConfirmPassword } 
            placeholder='Repetir senha'
            onChange = {(e) => setFields((fields) => ({... fields, confirmPassword: e.target.value})) }
          />
          <p className="passwordSecurity">Segurança da senha: <span>fraca</span></p>
          <ButtonDefault title='Entrar' />
        </form>
       
      </DivLogin>
    </Modal>
  )
}

export default ModalLogin