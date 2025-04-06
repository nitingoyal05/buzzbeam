import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/about" element={<AboutUs />}/> 
    </Routes>
  )
}

export default App
