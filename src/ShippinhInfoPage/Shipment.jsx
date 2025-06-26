import React from "react";
import ShippingProgress from "./ShippingProgress";
import ShippingCss from "./Shipping.module.css";
import ShippingFooter from "./ShippingFooter";
const Shipment = () => {
  const { orderInfo } = useContext(context);
  return (
    <div>
      <ShippingProgress step={2} />
      <section className={ShippingCss.personalInfo}>
        <div className={ShippingCss.infoDetails}>
          <span>Contact</span> {orderInfo.contact}
        </div>
        <div className={ShippingCss.infoDetails}>
          <span>Ship to</span>
          {orderInfo.shipto}
        </div>
      </section>
      <h2>Shipping Methods</h2>
      <ShipmentOption description="Standard Shipping" price="free" />
      <ShipmentOption description="Express Shipping" price="4.99$"/>
      <ShippingFooter back="details" goto="" goToText="Go to payment"/>
    </div>
  );
};

export default Shipment;
