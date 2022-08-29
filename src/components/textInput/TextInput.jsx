import { Input, Placeholder, DivInput } from './styled'
import { useState } from 'react'

const TextInput = (props) => {
  const [inputIsActive, setInputIsActive] = useState(false)

  const handleTextChange = (currentText) => {
    props.setValueInput(currentText)
    setInputIsActive(currentText !== '')
  }

  return(
    <>
      <DivInput>
        <Input type='text' name={props.name} value={props.value} onChange={(e) => handleTextChange(e.target.value)}/>
        <Placeholder id='text' isActive ={inputIsActive} >
          {props.placeholder}
        </Placeholder>
      </DivInput>
    </>
  )
}

export default TextInput