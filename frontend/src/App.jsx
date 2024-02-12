// import { useState } from 'react'
import './App.css'
import Navbar from './layouts/Navbar'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Success from './pages/Success'
import Notfound from './pages/Notfound'
import OurMenu from './pages/OurMenu'
import Contact from './pages/Contact'
import About from './pages/About'
import Reservation from './pages/Reservation'
import Services from './pages/Services'
import Team from './pages/Team'




function App () {
  

  return (
    <>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/success" element={<Success/>} />
      <Route exact path="/notfound" element={<Notfound/>} />
      <Route exact path="/menu" element={<OurMenu/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/reservation" element={<Reservation/>} />
      <Route exact path="/services" element={<Services/>} />
      <Route exact path="/team" element={<Team/>} />
      
      </Routes>
      
      
      
    </>
  )
}

export default App
