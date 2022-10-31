import ButtonDefault from "../button/Buton"
import TextInput from "../textInput/TextInput"
import {useState} from 'react'
import { DivButton } from './styled'


function FormContact(){
  const [errors, setErrors] = useState({ name: '', email: '', message:'' })
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const setField = (text, field) => {
    setFields((fields) => ({... fields, [field]: text}))
  }

  return (
    <>
      <TextInput
        name='name'
        type='text'
        placeholder='Seu nome completo'
        validate={errors.name}
        value={fields.name}
        onChange={(e)=> setField(e.target.value, 'name')}
      />
      <TextInput
        name='email'
        type='text'
        placeholder='Seu email'
        validate= {errors.email}
        value={fields.email}
        onChange={(e)=> setField(e.target.value, 'email')}
      />
      <TextInput
        name='message'
        type='text'
        placeholder='Sua mensagem'
        validate= {errors.message}
        value={fields.message}
        onChange={(e)=> setField(e.target.value, 'message')}
        classname='textarea'
      />
      <DivButton>
        <ButtonDefault title='Enviar' theme='default'/>
      </DivButton>
    </>
  )
}

export default FormContact