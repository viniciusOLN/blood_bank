import { Input, Placeholder, DivInput } from './styled'
import { useState } from 'react'

const TextInput = (props) => {
  const [inputIsActive, setInputIsActive] = useState(false)
  let errorValidate = (props.validate !== '')

  const handleTextChange = (currentText) => {
    props.setValueInput(currentText)
    setInputIsActive(currentText !== '')
  }

  return(
    <>
      <DivInput>
        <Input type={props.type} name={props.name} error={errorValidate} value={props.value} onChange={(e) => handleTextChange(e.target.value)}/>
        <Placeholder id='text' isActive ={inputIsActive} >
          {props.placeholder}
        </Placeholder>
        <i className={props.icon} onClick={props.onClickIcon}></i>
        
        { errorValidate && 
        <p>{props.validate}</p> 
      }
      </DivInput>
      
    </>
  )
}

export default TextInput