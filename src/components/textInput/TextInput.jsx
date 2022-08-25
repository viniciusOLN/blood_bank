import { Input, Placeholder, DivInput } from './styled'
import { useState } from 'react'

const TextInput = (props) => {
  const [inputIsActive, setInputIsActive] = useState(false)
  const [valueInput, setValueInput] = useState('')

  const handleTextChange = (currentText) => {
    setValueInput(currentText)
    if(currentText !== ''){
      setInputIsActive(true)
    }else{
      setInputIsActive(false)
    }
    
  }

  return(
    <>
      <DivInput>
        <Input type='text' value={valueInput} onChange={(e) => handleTextChange(e.target.value)}/>
        <Placeholder id='text' isActive ={inputIsActive} >
          {props.placeholder}
        </Placeholder>
      </DivInput>
    </>
  )
}

export default TextInput