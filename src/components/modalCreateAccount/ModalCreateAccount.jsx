import Modal from "../modal/Modal"
import {TitleLogin, BrandLogo, DivLogin} from "./styled"
import navbarIcon from '../../assets/images/navbar-icon.svg';
import TextInput from "../textInput/TextInput";
import ButtonDefault from "../button/Buton";
import { useState, useEffect } from 'react'
import createAccount from "../../proxies/createAccount";
import passwordSecurityField from "../../utils/passwordSecurity";
import SelectInput from "../selectInput/SelectInput";
import getAllEstates from "../../proxies/getAllEstates";
import getAllCities from "../../proxies/getAllCities";

const ModalCreateAccount = () => {
  const [apiError, setApiError] = useState('')  
  const [passwordSecurity, setPasswordSecurity] = useState({ security: '', color: '--error-color' })
  const [error, setError] = useState({ username: '', email: '', birthdate: '', password: '', confirmPassword: '' })
  const [fields, setFields] = useState({ 
    username: '',
    email: '', 
    birthdate: '',
    estate: '', 
    city: '',
    password: '', 
    confirmPassword: '', 
    hidePassword: false, 
    hideConfirmPassword: false
  })
  const [getEstates, setStates] = useState([])
  const [getCities, setCities] = useState([])

  async function populateEstates(){
    const data = await getAllEstates()
    setStates(data)    
  }
  
  async function populateCities(estate){
    const data = await getAllCities(estate)
    setCities(data)
  }
 
  useEffect(()=>{
    populateEstates()
  }, [])

  

  const validateForm = () => {
    setApiError('')
    setPasswordSecurity('')
    let confirmPassword = ''

    if(fields.confirmPassword !== fields.password){
      confirmPassword = 'A senha precisa ser igual a que você digitou anteriormente.'
    }

    setError(error => {
      return {
        ...error, 
        username: (fields.username === '') ? 'Campo vazio!' : '',
        email: (fields.email === '') ? 'Campo de Email vazio!' : '',  
        password: (fields.password === '') ? 'Campo de senha vazio!' : '', 
        birthdate: (fields.birthdate === '') ? 'Preencha a data de nascimento!' : '', 
        confirmPassword: (fields.confirmPassword === '') ? 'Campo vazio!' : confirmPassword,  
      }
    })

    return (fields.email !== '' && fields.password !== '' && fields.birthdate !=='' && fields.confirmPassword !=='' && fields.username !=='')
  }

  const handleEstateInput = (e) => {
    setField(e, 'estate')
    populateCities(e)
    console.log(e)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(validateForm()){   
      handleCreateAccountToken()  
    }
  }

  async function handleCreateAccountToken(){
    const getToken = await createAccount(
      fields.username,
      fields.email,
      fields.birthdate,
      fields.password,
      fields.confirmPassword,
    )
    console.log(getToken)

    // if(getToken.isVerified){
    //   setApiError(getToken.return.email)
    //   return
    // }
    // console.log(getToken.return)
  }


  const handleHiddePassword = () => setFields((fields) => ({ ... fields, hidePassword: !fields.hidePassword}))

  function handleHiddeConfirmPassword(){
    setFields((fields) => ({ ... fields, hideConfirmPassword: !fields.hideConfirmPassword}))
  }

  const setField = (text, field) => setFields((fields) => ({... fields, [field]: text}))

  function verifyField(text){
    setField(text, 'confirmPassword')
    verifyIfSamePassword(text)
  }

  function verifyIfSamePassword(text){
    let statePassword = ''
    if(text !== fields.password){
      statePassword = 'A senha precisa ser igual a que você digitou anteriormente.'
    }
    setError(error => ({...error, confirmPassword: statePassword }))
    return (text !== fields.password)
  }

  function verifyPasswordSecurity(text){
    setField(text, 'password')
    const verifiedPassword = passwordSecurityField(text)

    let stateConfirmPassword = ''
    
    setError(error => ({ ...error, password: verifiedPassword.messageField }))
    
    if((text !== fields.confirmPassword) ){
      stateConfirmPassword = 'A senha precisa ser igual a que você digitou anteriormente.' 
    }
    setError(error => ({ ...error, confirmPassword: stateConfirmPassword }))
    setPasswordSecurity((security) => ({
      ... security, 
      security: verifiedPassword.securityPassword, 
      color: verifiedPassword.color
    }))
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
            value = { fields.username } 
            validate = { error.username }
            type='text' 
            name='username' 
            placeholder='Nome de Usuário'
            onChange = {(e) => setField(e.target.value, 'username') }
          /> 
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
          <SelectInput name='estate' validate='aaa' value={fields.estate} onChange = {(e)=> handleEstateInput(e.target.value)}>
            <option value= ''>Selecione o estado</option>  
            {getEstates.map((e, index) => 
              <option key={index} value= {e.sigla}> {e.nome}</option>              
            )}
          </SelectInput>
          {fields.estate != '' && 
            <SelectInput name='cities' validate='aaa' value={fields.city} onChange = {(e)=> setField(e.target.value, 'city')}>
              <option value= ''>Selecione a cidade</option>  
              {getCities.map((e, index) => 
                <option key={e.id} value= {e.nome}> {e.nome}</option>              
              )}
            </SelectInput>
          }
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
            onChange = {(e) => verifyField(e.target.value) }
          />
          {passwordSecurity.security  && 
            <p className="passwordSecurity">Segurança da senha: <span>{ passwordSecurity.security }</span></p>
          }
         
          <ButtonDefault title='Cadastrar' theme='default' />
        </form>
       
      </DivLogin>
    </Modal>
  )
}

export default ModalCreateAccount