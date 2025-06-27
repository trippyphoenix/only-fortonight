import React, { useState } from "react";
import ShippingProgress from "./ShippingProgress";
import ShippingCss from "./Shipping.module.css";
import ShippingFooter from "./ShippingFooter";
import ShippingCartInfo from "./ShippingCartInfo";
import Context from "../UseContext/Context";
import InfoEntry from "./InfoEntry";
import { useContext } from "react";
const Shipment = () => {
  const { orderInfo } = useContext(Context);
  const { setOrderInfo } = useContext(Context);
  const handleSubmit = (e) => {
  e.preventDefault(); 

  const formData = new FormData(e.target);
  const selectedShipment = formData.get("chooseShipment"); 

  if (selectedShipment) {
    setOrderInfo((prev) => ({
      ...prev,
      Shippment: selectedShipment
    }));
  } else {
   
    return;
  }
};

  return (
    <div>
      <div>
        <ShippingProgress step={2} />
        <section className={ShippingCss.personalInfo}>
          <InfoEntry infoType="Contact" infoValue={orderInfo.contact} />
          <InfoEntry infoType="Ship to" infoValue={orderInfo.shipto} />
        </section>
        <h2>Shipping Methods</h2>
        <form action="" onSubmit={handleSubmit}>
          <ShipmentOption
            description="Standard Shipping"
            price="free"
            value={0}
            setShipmentCost={setShipmentCost}
          />
          <ShipmentOption
            description="Express Shipping"
            price="4.99$"
            value={4.99}
            setShipmentCost={setShipmentCost}
          />
        </form>
        <div> {}</div>

        <ShippingFooter back="details" goto="" goToText="Go to payment" />
        <div></div>
      </div>
      <ShippingCartInfo backGroundColor="#56B28033" shipping={shipmentChoice} />
    </div>
  );
};

export default Shipment;
