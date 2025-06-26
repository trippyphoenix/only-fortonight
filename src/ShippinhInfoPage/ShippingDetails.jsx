import React from "react";
import ShippingProgress from "./ShippingProgress";
import ShippingFooter from "./ShippingFooter";
import ShippingCss from "./Shipping.module.css";
import AdressComponent from "./AdressComponent";
const ShippingDetails = () => {
  return (
    <div className={ShippingCss.ShippingInfoContainer}>
      <div className={ShippingCss.ShippingDetailsBox}>
        <ShippingProgress step={1} />
        <form className={ShippingCss.detailsForm} action="">
          <label>
            <p>Contact</p>
            <input
              type="text"
              placeholder="Email or mobile phone number"
              style={{ marginBottom: "1.8rem" }}
            />
            <span className={ShippingCss.required}></span>
          </label>
          <p>Shipping Address</p>
          <div className={ShippingCss.nameInputRow}>
            <div>
              <input type="text" placeholder="First Name" />
              <span className={ShippingCss.required}></span>
            </div>
            <div>
              <input type="text" placeholder="Second Name" required />
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
          <div className={ShippingCss.nameInputRow}>
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
          <div className={ShippingCss.cookies}>
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
