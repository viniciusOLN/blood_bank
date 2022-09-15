async function getUserTokenLogin(emailField, passwordField){
  const getToken = await fetch('http://127.0.0.1:8000/blood_bank/login/' , {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    //   // Autorization: 'Token ${props.token}' ,
    body: JSON.stringify({ email: emailField, password: passwordField }),
  })

  const data = await getToken.json()

  if(getToken.status == 200){
    return { 'return' : data, 'isVerified' : true }
  }

  return { 'return' : getToken.email, 'isVerified' : false }
}

export default getUserTokenLogin