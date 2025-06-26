import React from "react";
import { Link } from "react-router-dom";
import ShippingCss from "./Shipping.module.css"
const ShippingFooter = ({ back, goTo, goToText }) => {
  return (
    <div className={ShippingCss.ShippingFooter}>
     
      <Link to="/">back to {back}</Link>
      <button type="submit">{goToText}</button>
    </div>
  );
};

export default ShippingFooter;
