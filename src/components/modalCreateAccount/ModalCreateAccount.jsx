import Modal from "../modal/Modal"
import {TitleLogin, BrandLogo, DivLogin} from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import TextInput from "../textInput/TextInput";
import ButtonDefault from "../button/Buton";
import { useState } from 'react'

const ModalCreateAccount = () => {
  const [apiError, setApiError] = useState('')
  const [passwordSecurity, setPasswordSecurity] = useState({ security: '', color: '--error-color' })
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
        password: (fields.password === '') ? 'Campo de senha vazio!' : '', 
        birthdate: (fields.birthdate === '') ? 'Preencha a data de nascimento!' : '', 
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

  function handleHiddeConfirmPassword(){
    setFields((fields) => ({ ... fields, hideConfirmPassword: !fields.hideConfirmPassword}))
  }

  const setField = (text, field) => setFields((fields) => ({... fields, [field]: text}))

  function verifyIfSamePassword(text){
    let statePassword = ''
    setField(text, 'confirmPassword')
    if(text !== fields.password){
      statePassword = 'A senha precisa ser igual a que você digitou anteriormente.'
    }
    setError(error => ({...error, confirmPassword: statePassword }))
  }

  function verifyPasswordSecurity(text){
    setField(text, 'password')
    const MIN_CARACTERS = 8
    const specialCaracters = ['@', '#', '$', '*', '&', '%', '/', '\\']
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let messageField = ''
    let colorField = '--error-color'
    let securityPassword = ''
    const hasNumbers = numbers.some((e) => text.includes(e))
    const hasSpecialCaracters = specialCaracters.some((e) => text.includes(e))
    
    if(text.length <= MIN_CARACTERS){
      securityPassword = 'fraca'
      messageField = `Mínimo de Caracteres: ${MIN_CARACTERS}`
    }

    if(text.length > MIN_CARACTERS){
      securityPassword = 'fraca'
    }

    if(text.length >= MIN_CARACTERS && hasNumbers){
      messageField = ''
      securityPassword = 'mediana'
      colorField = '--warning-color'      
    }

    if(text.length >= MIN_CARACTERS && hasSpecialCaracters && hasNumbers){
      messageField = ''
      securityPassword = 'forte' 
      colorField = '--success-color'     
    }
    
    setError(error => ({ ...error, password: messageField }))
    setPasswordSecurity((security) => ({... security, security: securityPassword, color: colorField}))
  }

  return (
    <Modal>
      <TitleLogin>Cadastro</TitleLogin>
      <BrandLogo>
        <img src={ navbarIcon } alt="Blood Bank Logo System" title='Sistema de coleta de sangue'/>
      </BrandLogo>
      <DivLogin colorTipPassword = {passwordSecurity.color}>
        <p className='errorApi'>{apiError}</p>
        <form onSubmit={ handleSubmit }>
          <TextInput
            value = { fields.email } 
            validate = { error.email }
            type='Email' 
            name='email' 
            placeholder='Email'
            onChange = {(e) => setField(e.target.value, 'email') }
          />    
          <TextInput 
            value = { fields.birthdate } 
            validate = { error.birthdate }
            type='date'
            name='birthdate'
            placeholder='Data de Nascimento'
            onChange = {(e) => setField(e.target.value, 'birthdate') }
          />
           <TextInput 
            value = { fields.password } 
            validate = { error.password }
            type={ fields.hidePassword ? 'Text' : 'Password' }
            name='password'
            icon ={ fields.hidePassword ? 'ri-eye-off-line' : 'ri-eye-line' }
            onClickIcon={ handleHiddePassword } 
            placeholder='Senha'
            onChange = {(e) => verifyPasswordSecurity(e.target.value) }
          />
           <TextInput 
            value = { fields.confirmPassword } 
            validate = { error.confirmPassword }
            type={ fields.hideConfirmPassword ? 'Text' : 'Password' }
            name='password'
            icon ={ fields.hideConfirmPassword ? 'ri-eye-off-line' : 'ri-eye-line' }
            onClickIcon={ handleHiddeConfirmPassword } 
            placeholder='Repetir senha'
            onChange = {(e) => verifyIfSamePassword(e.target.value) }
          />
          {passwordSecurity.security != '' && 
            <p className="passwordSecurity">Segurança da senha: <span>{ passwordSecurity.security }</span></p>
          }
         
          <ButtonDefault title='Entrar' theme='default' />
        </form>
       
      </DivLogin>
    </Modal>
  )
}

export default ModalCreateAccount