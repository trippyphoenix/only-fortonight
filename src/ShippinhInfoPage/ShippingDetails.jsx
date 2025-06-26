import React from "react";
import ShippingProgress from "./ShippingProgress";
import ShippingFooter from "./ShippingFooter";
import ShippingCss from "./Shipping.module.css";
import AdressComponent from "./AdressComponent";
const ShippingDetails = () => {
  return (
    <div className={ShippingCss.ShippingInfoContainer}>
      <div className={ShippingCss.ShippingDetailsBox}>
        <ShippingProgress step="1" />
        <form action="">
          <label>
            Contact
            <input type="text" placeholder="Email or mobile phone number" />
            <span className={ShippingCss.required}></span>
          </label>
          <h2>Shipping Address</h2>
          <div className="NameInputRow">
            <div>
              <input type="text" placeholder="First Name" />
              <span className={ShippingCss.required}></span>
            </div>
            <div>
              <input type="text" placeholder="Second Name" />
              <span className={ShippingCss.required}></span>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Address and number" />
            <span className={ShippingCss.required}></span>
          </div>
          <div>
            <input type="text" placeholder="Shipping note (optional)" />
            <span className={ShippingCss.required}></span>
          </div>
          <div className="adressDetails">
            <div>
              {" "}
              <input type="text" placeholder="City" />
              <span className={ShippingCss.required}></span>
            </div>
            <div>
              {" "}
              <input type="text" placeholder="Postal Code" />
              <span className={ShippingCss.required}></span>
            </div>
            <div>
              {" "}
              <AdressComponent placeholder="Province" options={[]} />
            </div>
          </div>
          <AdressComponent placeholder="Country/Region " options={[]} />
          <div>
            <input type="checkbox" />
            <span>Save this informations for a future fast checkout</span>
          </div>
          <ShippingFooter
            back="Card"
            goTo="Shipping"
            goToText="Go to shipping"
          />
        </form>
      </div>
    </div>
  );
};

export default ShippingDetails;
