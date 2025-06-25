import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({product}) => {
  return (
    <>
        <div className={styles.productCard_img_container}>
            <img src={product.imgMain} alt={product.name} className={styles.productCard_img} />
        </div>                                          
        <div className={styles.productCard_info}>
            <p>{product.name + ' ' + product.type}</p>
            <p>{'$' + product.price + ".00"}</p>
        </div>

    </>
  )
}

export default ProductCard