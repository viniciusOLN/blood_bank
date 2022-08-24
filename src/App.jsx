import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Home from './pages/homepage/homepage';
function App() {
  const [modalLogin, setModalLogin] = useState(false);

  return (
   <BrowserRouter>
      <NavBar modalLoginOpen={setModalLogin}/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
