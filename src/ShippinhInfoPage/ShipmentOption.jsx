import React from 'react'

const ShipmentOption = ({description,price,value,setShipmentCost}) => {
  return (
    <div><input name="chooseShipment" type="radio-button" value={value} onClick={setShipmentCost}/><span>{description}</span><span>{price}</span></div>
  )
}

export default ShipmentOption