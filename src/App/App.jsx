import { useState } from 'react'
import './lala.module.css'
import {products} from "../Data/MostProtectedData.js"
import Context from "../UseContext/Context.js"

import NavBar from '../NavBar/NavBar.jsx'
import LandingPage from '../LandingPage/LandingPage.jsx'


function App() {
  const [productsData, setProductsData] = useState(products)
  // krwepooo
  // hello from dubaii
  // hello
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Context.Provider value={productsData}>
      <LandingPage />
      </Context.Provider>
    </div>
  )
}

export default App
