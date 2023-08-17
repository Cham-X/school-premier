import React from 'react';
import styles from "./EcommerceSection.module.css";
import EcommerceImage from "../assets/images/ui-max-footer-thumbnail.jpg";

function EcommerceSection() {
  return (
    <section className={ styles.EcommerceSection }>
      <div className={ styles.EcommerceSectionContent }>
        <p>E-COMMERCE UI</p>
        <h2>Design E-commerce Websites Faster!</h2>
        <h2 className={ styles.OFF }>15% OFF</h2>
        <button>Download Now</button>
        <img src={ EcommerceImage } alt="EcomerceImage" />
      </div>
    </section>
  );
}

export default EcommerceSection;
