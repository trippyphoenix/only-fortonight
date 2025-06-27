import React, { use, useContext } from "react";
import Cartitems from "./Cartitems";
import Context from "../UseContext/Context";
import cartStyles from "./CartStyles.module.css"
const CartPage = () => {
    const {totalPrice,totalQuantity, currentCurrency}=useContext(Context)
   

  return (
    <div>
      <h1>Cart</h1>
      <Cartitems />
      <p>Quantity: <span className={cartStyles.totals}>{totalQuantity}</span></p>
        <p className={cartStyles.totalLabel}>Total: <span className={cartStyles.totals}>{currentCurrency} {totalPrice}</span></p>
        <button className={
            cartStyles.continueButton
        }> CONTINUE</button>
    </div>
  );
};

export default CartPage;
