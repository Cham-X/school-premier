import React from 'react';
import styles from "./MainContent.module.css";
import Hero from './HeroSection';
import EcommerceSection from './EcommerceSection';

const MainContent = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <EcommerceSection />
    </main>
  );
};

export default MainContent;
