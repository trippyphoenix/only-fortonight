import { useState } from 'react'
import './lala.module.css'
import {products} from "../Data/MostProtectedData.js"
import Context from "../UseContext/Context.js"
import {Route, Routes, Navigate} from 'react-router-dom'

import NavBar from '../NavBar/NavBar.jsx'
import LandingPage from '../LandingPage/LandingPage.jsx'
import ProductPage from '../LandingPage/ProductPage/ProductPage.jsx'
import ShippingDetails from '../ShippinhInfoPage/ShippingDetails.jsx'

function App() {
  const [productsData, setProductsData] = useState(products)
  const [orderInfo,setOrderInfo]=useState({})

  return (
    <div>
      <Context.Provider value={{data: productsData, setData: setProductsData,orderInfo:orderInfo,setOrderInfo:setOrderInfo}}>
        <Routes>
          <Route path="/" element={<Navigate to="/women" replace />} />
          <Route path="/women" element={<><NavBar /> <LandingPage sort="WOMEN"/></>} />
          <Route path="/men" element={<><NavBar /> <LandingPage sort="MEN"/> </>} />
          <Route path="/kids" element={<><NavBar /> <LandingPage sort="KIDS"/> </>} />
          <Route path="/men/:id" element={<ProductPage />} />
          <Route path="/kids/:id" element={<ProductPage />} />
          <Route path="/women/:id" element={<ProductPage />} />
          <Route path="/shipping/details" element={<ShippingDetails/>} />
        </Routes>
      </Context.Provider>
    </div>
  )
}

export default App
