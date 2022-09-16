async function createAccount(usernameForm, emailForm, birthDateForm, passwordForm, confirmPasswordForm){
  console.log(usernameForm)
  console.log(emailForm)
  console.log(birthDateForm)
  console.log(passwordForm)
  console.log(confirmPasswordForm)
  const getToken = await fetch('http://127.0.0.1:8000/blood_bank/signup/' , {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    //   // Autorization: 'Token ${props.token}' ,
    body: JSON.stringify({
      username: usernameForm, 
      email: emailForm, 
      birth_date: birthDateForm,
      password: passwordForm,
      confirm_password: confirmPasswordForm
    }),
  })

  const data = await getToken.json()

  if(getToken.status == 200){
    return { 'return' : data, 'isVerified' : true }
  }

  return { 'return' : getToken.email, 'isVerified' : false }
}

export default createAccount