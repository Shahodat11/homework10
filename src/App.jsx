import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MainTop from './components/mainTop/MainTop'
import Cards from './components/cards/Cards'
import MainImg from './components/mainImg/MainImg'
import Footer from './components/footer/Footer'
import FooterTop from './components/footerTop/FooterTop'
import MainBottom from './components/mainBottom/MainBottom'

function App() {
  return (
    <>
    <Navbar/>
    <MainTop/>
    <Cards/>
    <MainImg/>
    {/* <MainBottom/> */}
    <FooterTop/>
    <Footer/>
    </>
  )
}

export default App
