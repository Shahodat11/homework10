import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MainTop from './components/mainTop/MainTop'
import Cards from './components/cards/Cards'
import MainImg from './components/mainImg/MainImg'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <MainTop/>
    <Cards/>
    <MainImg/>
    <Footer/>
    </>
  )
}

export default App
