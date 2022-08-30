import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Home from './pages/homepage/homepage';
function App(props) {
  const [token, setToken] = useState('')

  const userLogin = (token_param) => {
    setToken(token_param)
  }

  return (
   <BrowserRouter >
      <NavBar userLogin={userLogin} />
      <Routes >
        <Route path='/' element={<Home />}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
