import React from 'react';
import styles from "./Footer.module.css";
import Phone from "../assets/images/bx_bx-phone.png";
import Map from "../assets/images/bx_bx-map.png";
import Message from "../assets/images/carbon_send-alt.png"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Company Info</h3>
            <ul>
              <li><a href="/#">About Us</a></li>
              <li><a href="/#">Carrier</a></li>
              <li><a href="/#">We are hiring</a></li>
              <li><a href="/#">Blog</a></li>
            </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Legal</h3>
          <ul>
            <li><a href="/#">About Us</a></li>
            <li><a href="/#">Carrier</a></li>
            <li><a href="/#">We are hiring</a></li>
            <li><a href="/#">Blog</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Features</h3>
          <ul>
            <li><a href="/#">Business</a></li>
            <li><a href="/#">Analytic</a></li>
            <li><a href="/#"> Live Chat</a></li>
            <li><a href="/#">Unlimited Support</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Reasources</h3>
          <ul>
            <li><a href="/#">IOS & Android</a></li>
            <li><a href="/#">Watch a Demo</a></li>
            <li><a href="/#">Customers</a></li>
            <li><a href="/#">API</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Get In Touch</h3>
          <ul>
            <li><span><img src={Phone} alt="phone" /></span><p><span>(480) 555-0103</span></p></li>
            <li><span><img src={Map} alt="phone" /></span><p><span>4517 Washington Ave. Manchester,Kentucky 39495</span></p></li>
            <li><span><img src={Message} alt="phone" /></span><p><span>debra.holt@example.com</span></p></li>
          </ul>
        </div>
      </div>
      <div className={styles.lastFooterSection}>
        <p>Made With Love By Figmaland All Right Reserved </p>
        <div className={styles.socialMediaHandle}>
          <FaFacebook className={styles.Icon} />
           <FaInstagram className={styles.Icon}/>
           <FaTwitter className={styles.Icon}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
