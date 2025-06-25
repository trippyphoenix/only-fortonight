import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({product}) => {
  const symbols = {
    USD: "$", // USD Currency
    EUR: "€", // EUR Currency
    JPY: "¥", // JPY Currency
  };
  return (
    <>
        <div className={styles.productCard_img_container}>
            <img src={product.imgMain} alt={product.name} className={styles.productCard_img} />
        </div>                                          
        <div className={styles.productCard_info}>
            <p>{product.name + ' ' + product.type}</p>
            <p>{symbols[product.currency] + product.price.toString() + ".00"}</p>
        </div>

    </>
  )
}

export default ProductCard