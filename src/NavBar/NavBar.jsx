import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar_left}>
            <a href="">WOMEN</a>
            <a href="">MEN</a>
            <a href="">KIDS</a>
        </div>
        <div className={styles.navbar_logo}>
            <a href="">LOGO</a>
        </div>
        <div className={styles.navbar_right}>
            <a href="">Currency</a>
            <a href="">Cart</a>
        </div>
    </div>
  )
}

export default NavBar