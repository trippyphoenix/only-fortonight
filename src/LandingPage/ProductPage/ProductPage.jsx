import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../../UseContext/Context'

const ProductPage = () => {
    const {id} = useParams()
    const {data} = useContext(Context)
    const product = data.find(product => product.id === id)
    return (
    <div>ProductPage</div>
  )
}

export default ProductPage