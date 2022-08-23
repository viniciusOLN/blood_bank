import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Home from './pages/homepage/homepage';
function App() {

  return (
   <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
