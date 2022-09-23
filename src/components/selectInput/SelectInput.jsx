import { InputSelect, ErrorMessage, DivInput } from './styled'

function SelectInput(props){
  let errorValidate = (props.validate !== '')

  return (  
    <DivInput>
     <InputSelect name={props.name} error = {errorValidate} onChange ={ props.onChange}>      
      {props.children}
     </InputSelect>
      { errorValidate && 
        <ErrorMessage>{props.validate}</ErrorMessage> 
      }
    </DivInput>
   
  )
}

export default SelectInput