import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MainTop from './components/mainTop/MainTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <MainTop/>
    </>
  )
}

export default App
