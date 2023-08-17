import React from 'react';
import styles from "./Footer.module.css";
import { FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={ styles.footerContent }>
        <div className={ styles.footerSection }>
          <h2>Get In Touch</h2>
          <ul>
            <li><a href="/#">hello@caption-design.com</a></li>
            <li>
              <ul className={ styles.socialHandle }>
                <li><a href="/#"><FaYoutube className={ styles.Icon } /></a></li>
                <li><a href="/#"><FaTwitter className={ styles.Icon } /></a></li>
                <li><a href="/#"><FaMedium className={ styles.Icon } /></a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={ styles.footerSection }>
          <h2>Products</h2>
          <ul>
            <li><a href="/#">Essentail Ui Pro</a></li>
            <li><a href="/#">Ui Max</a></li>
            <li><a href="/#">Premium Figma Template</a></li>
          </ul>
        </div>
        <div className={ styles.footerSection }>
          <h2>Freebies</h2>
          <ul>
            <li><a href="/#">Essential Ui</a></li>
            <li><a href="/#">Free Figma Template</a></li>
            <li><a href="/#">Font Styles</a></li>
            <li><a href="/#">Color Palettes</a></li>
            <li><a href="/#">Tutorials</a></li>
          </ul>
        </div>
        <div className={ styles.footerSection }>
          <h2>Company</h2>
          <ul>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Contact</a></li>
          </ul>
        </div>
        <div className={ styles.footerSection }>
          <h2>Legal</h2>
          <ul>
            <li><a href="/#">Privacy Policy</a></li>
            <li><a href="/#">License</a></li>
            <li><a href="/#">Terms Policy</a></li>
            <li><a href="/#">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <p>Made With Love By Captain-design All Right Reserved</p>
    </footer>
  );
};

export default Footer;
