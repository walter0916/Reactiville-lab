import React from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'

const App = () => {
  const [daytime, setDaytime] = useState(true)

  const setDayTimeHandler = (time) => {
    setDaytime(time)
  }
  
  return (
    <main>
      <Nav setDayTimeHandler={setDayTimeHandler}/>
      <Routes>
        <Route path="/" element={<Landing daytime={daytime} />} />
        <Route path="/burgers" element={<BurgerShop />} />
      </Routes>
    </main>
  )
}

export default App