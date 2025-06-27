import React from 'react'
import CartItem from './CartItem'
const Cartitems = () => {
  const {cartItems}={useContext}
  return (
    <div className={cartStyles.cartItemsBox}>
      {
        cartItems.map((item)=> <CartItem product={item} />)
      }
    </div>
  )
}

export default Cartitems