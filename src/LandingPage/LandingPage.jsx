import React, { useContext } from 'react'
import styles from './LandingPage.module.css'
import Context from "../UseContext/Context.js"
import ProductCard from './ProductCards/ProductCard.jsx'

const LandingPage = ({sort}) => {
  const data = useContext(Context);
  const filteredData = data.filter((product)=> product.gender == sort)
  console.log(filteredData);
  return (
    <div className={styles.landingPage}>
        <div className={styles.landingPage_header}>
            <p>Category Name</p>
        </div>
        <div className={styles.productCard_container}>
          {filteredData.map((product)=>(
            <div key={product.id} className={styles.productCard}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default LandingPage
