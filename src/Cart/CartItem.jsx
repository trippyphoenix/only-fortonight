import React, { useState,useContext } from "react";
import styles from "../LandingPage/ProductPage/ProductPage.module.css";
import cartStyles from "./CartStyles.module.css"
import Context from "../UseContext/Context";
const CartItem = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].size);
  const { additionToCard,currentCurrency } = useContext(Context);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const handleImageSwap=(direction)=>{
    if(direction=="right"){
        currentImageIndex<product.ArraysOfImg.length-1 ? setCurrentImageIndex(currentImageIndex+1):setCurrentImageIndex(0) 
    }else{
        currentImageIndex<product.ArraysOfImg.length>0 ? setCurrentImageIndex(currentImageIndex-1):setCurrentImageIndex(product.ArraysOfImg.lenght-1) 
    }

  }
  const chosenSizeQuantity=product.sizeQuantities[selectedSize] || 0
  return (
    <div>
      <div className={styles.upperInfo}>
        <div>
          <p className={styles.productName}>{product.name}</p>
          <p className={styles.productType}>{product.type}</p>
        </div>
        <div className={styles.priceContainer}>
          <span>PRICE:</span>
          <p className={styles.price}>
            {currentCurrency + product.price + ".00"}
          </p>
        </div>
        <div className={styles.sizeContainer}>
          <div className="">
            {/* Size Label */}
            <div className="">
              <span className={styles.sizeLabel}>SIZE:</span>
            </div>

            {/* Size Options */}
            <div className={styles.sizeOptions}>
              {product.sizes.map((sizes) => (
                <button
                  key={sizes}
                  onClick={() => handleSizeSelect(sizes.size)}
                  className={styles.sizeOption}
                  data-selected={selectedSize === sizes.size}
                >
                  {sizes.size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={cartStyles.cartManipulation}>
          <button onClick={() =>  additionToCard(selectedSize,product,'increase')}>+</button>
          <p>{chosenSizeQuantity}</p>
          <button onClick={() => additionToCard(selectedSize,product,'decrease')}>-</button>
        </div>
        <div className={cartStyles.imageInCart}></div>
      </div>
    </div>
  );
};

export default CartItem;
