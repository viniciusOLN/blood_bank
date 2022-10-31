export default function passwordSecurityField(text){
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
  
  return {
    'messageField' : messageField,
    'color': colorField,
    'securityPassword' : securityPassword
  }
}