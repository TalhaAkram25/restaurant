import './App.css'
import Navbar from './layouts/Navbar'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import OurMenu from './pages/OurMenu'
import Contact from './pages/Contact'
import About from './pages/About'
import Reservation from './pages/Reservation'
import Services from './pages/Services'
import Team from './pages/Team'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './layouts/Footer'




function App () {

  return (
    <>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/menu" element={<OurMenu/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/reservation" element={<Reservation/>} />
      <Route exact path="/services" element={<Services/>} />
      <Route exact path="/team" element={<Team/>} />
      </Routes>
      <Footer/>   
    </>
  )
}

export default App
