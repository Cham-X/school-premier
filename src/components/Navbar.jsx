import React from 'react';
import hamburger from "../assets/images/hamburger icon.svg";
import styles from "./Navbar.module.css";
import SubNavbar from './SubNavbar';

function Navbar() {
  return (
    <nav>
      <div className={ styles.navbar }>
        <h1>Captain Design</h1>
        <button>
          <img src={ hamburger } alt="hamburger" width={ 27 } height={ 27 } />
        </button>
        <div className={ styles.navLink }>
          <ul>
            <li><a href="/#">Templates</a></li>
            <li><a href="/#">Ui Kits</a></li>
            <li><a href="/#">Plugins <span className={ styles.greenbg }>NEW</span></a></li>
          </ul>
          <ul>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Contact</a></li>
          </ul>
        </div>
      </div>
      <SubNavbar />
    </nav>
  );
}

export default Navbar;
