import React from 'react';
import hamburger from "../assets/images/hamburger icon.svg";
import styles from "./Navbar.module.css";
import Button from './Resources/Button';
import Arrow from "../assets/images/icn arrow-right .icn-xs.png"

function Navbar() {
  return (
    <nav>
      <div className={ styles.navbar }>
        <h3>School-Premier-Shamsudeen</h3>
        <button>
          <img src={ hamburger } alt="hamburger" width={ 27 } height={ 27 } />
        </button>
        <div className={ styles.navLink }>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">Products</a></li>
            <li><a href="/#">Pricing</a></li>
            <li><a href="/#">Contect</a></li>
          </ul>
          <ul>
            <li><a href="/#">Login</a></li>
            <Button type="submit">JOIN US <span><img src={Arrow} alt="arrow" /></span></Button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
