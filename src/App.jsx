import React from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'

const App = () => {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/burgers" element={<BurgerShop />} />
      </Routes>
    </main>
  )
}

export default App