import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../../UseContext/Context'
import NavBar from '../../NavBar/NavBar'

const ProductPage = () => {
    const {id} = useParams()
    const {data} = useContext(Context)
    const product = data.find(product => product.id == id)
    return (
    <>
      <NavBar/>
      {product.ArraysOfImg.map((imgsrc) => (<img src={imgsrc} alt="bebishensia"/>))}
    </>
  )
}

export default ProductPage