
import { useContext } from "react";
const ShippingCartInfo = ({ backGroundColor, shipping }) => {
  const { cartItems } = useContext(Context);
  let totalPrice = 0;

  for (const item of cartItems) {
    let itemQuantity = 0;

    for (const size in item.sizeQuantities) {
      itemQuantity += item.sizeQuantities[size];
    }

    totalPrice += itemQuantity * item.price;
  }
    const GrandTotal = Number(shipping)
    ? totalPrice + Number(shipping)
    : totalPrice;
  return (
    <div>
      <div>
        <div>
          <span>Subtotal</span>
          <span>{totalPrice}</span>
        </div>
        <div>
          <span>Shipping</span>
          <span>{shipping}</span>
        </div>
      </div>
      <div>
        <span>Total</span>
        <span>{GrandTotal}</span>
      </div>
    </div>
  );
};

export default ShippingCartInfo;
