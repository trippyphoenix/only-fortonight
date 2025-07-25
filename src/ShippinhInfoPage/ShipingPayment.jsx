import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShippingPayment from "./ShippingPayment.module.css"
const ShipingPayment = () => {
  const [orderNumber, setOrderNumber] = useState(1);
  
  useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrderNumber");
    const newOrder = lastOrder ? parseInt(lastOrder) + 1 : 1;

    setOrderNumber(newOrder);
    localStorage.setItem("lastOrderNumber", newOrder);
  }, []);
  

  return (
    <div className={ShippingPayment.head}>
      <div className={ShippingPayment.iconic}><svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3859_1197)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50 93.75C61.6032 93.75 72.7312 89.1406 80.9359 80.9359C89.1406 72.7312 93.75 61.6032 93.75 50C93.75 38.3968 89.1406 27.2688 80.9359 19.0641C72.7312 10.8594 61.6032 6.25 50 6.25C38.3968 6.25 27.2688 10.8594 19.0641 19.0641C10.8594 27.2688 6.25 38.3968 6.25 50C6.25 61.6032 10.8594 72.7312 19.0641 80.9359C27.2688 89.1406 38.3968 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100Z"
            fill="#56B280"
            fill-opacity="0.6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.5626 31.0625C69.4373 30.1955 70.6181 29.7075 71.8497 29.7041C73.0813 29.7007 74.2648 30.1822 75.1442 31.0444C76.0237 31.9066 76.5285 33.0803 76.5494 34.3117C76.5704 35.5431 76.1059 36.7334 75.2564 37.625L50.3064 68.8125C49.8776 69.2744 49.36 69.6451 48.7847 69.9023C48.2094 70.1596 47.5881 70.2982 46.958 70.3099C46.3278 70.3216 45.7018 70.2061 45.1174 69.9703C44.5329 69.7345 44.002 69.3832 43.5564 68.9375L27.0251 52.4C26.5646 51.9709 26.1952 51.4534 25.939 50.8784C25.6828 50.3034 25.545 49.6827 25.5339 49.0533C25.5228 48.4239 25.6386 47.7987 25.8744 47.2151C26.1101 46.6314 26.461 46.1012 26.9061 45.6561C27.3513 45.2109 27.8815 44.86 28.4651 44.6243C29.0488 44.3885 29.674 44.2727 30.3034 44.2838C30.9328 44.295 31.5535 44.4327 32.1285 44.6889C32.7035 44.9451 33.221 45.3145 33.6501 45.775L46.7376 58.8563L68.4439 31.2C68.4826 31.1516 68.5244 31.1057 68.5689 31.0625H68.5626Z"
            fill="#56B280"
            fill-opacity="0.6"
          />
        </g>
        <defs>
          <clipPath id="clip0_3859_1197">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg></div>
      <div className={ShippingPayment.title}><h1>Payment Confirmed</h1></div>
      <div className={ShippingPayment.order}> <p>ORDER #{orderNumber}</p></div>
     <div className={ShippingPayment.button}><Link to="/women">Back to shoping</Link></div>
      
    </div>
  );
};

export default ShipingPayment;
