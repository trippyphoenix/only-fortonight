import React, { useContext } from 'react'
import styles from './LandingPage.module.css'
import Context from "../UseContext/Context.js"

const LandingPage = () => {
  const data = useContext(Context);
  console.log(data);
  return (
    <div className={styles.landingPage}>
        <div className={styles.landingPage_header}>
            <p>Category Name</p>
        </div>
        <div className={styles.landingPage_products}>
            {/* {data.map((product) => (
                <div className={styles.landingPage_product}>
                    <img src="../assets/images/WOMEN_running_shorts.jpg" alt={product.name} />
                    <p>{product.name}</p>
                </div>
            ))} */}
            <img src="./" alt="lalal" />
            {/* <p>{product.name}</p> */}
        </div>
    </div>
  )
}

export default LandingPage