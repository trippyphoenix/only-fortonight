import { useState } from 'react'
import './lala.module.css'
import {products} from "../Data/MostProtectedData.js"
import Context from "../UseContext/Context.js"
import {Router, Route, Routes } from 'react-router-dom'

import NavBar from '../NavBar/NavBar.jsx'
import LandingPage from '../LandingPage/LandingPage.jsx'

function App() {
  const [productsData, setProductsData] = useState(products)
  return (
    <div>
      <NavBar />
      <Context.Provider value={productsData}>
        <Routes>
          <Route path="/" element={<LandingPage sort="WOMEN"/>} />
          <Route path="/men" element={<LandingPage sort="MEN"/>} />
          <Route path="/kids" element={<LandingPage sort="KIDS"/>} />
        </Routes>
      </Context.Provider>
    </div>
  )
}

export default App
