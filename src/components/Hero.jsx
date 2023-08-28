import React from 'react';
import styles from "./Hero.module.css"
import Button from './Resources/Button';

const Hero = () => {
    return (
        <section className={styles.heroSpace}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
         <p>Welcome</p>
         <h1>HIGH QUALITY <br /> COURSES </h1>
         <p>Every day brings with it a fresh set of learning <br /> possibilities.</p>
         <Button><p>Join Us</p></Button>
      </div>
    </section>
    );
}

export default Hero;
