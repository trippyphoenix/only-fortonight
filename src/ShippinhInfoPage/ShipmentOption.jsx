import React from 'react'

const ShipmentOption = ({description,price}) => {
  return (
    <div><input type="radio-button" /><span>{description}</span><span>{price}</span></div>
  )
}

export default ShipmentOption