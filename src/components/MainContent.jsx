import React from 'react';
import styles from "./MainContent.module.css";
import  HeroSection from "./HeroSection"
// import EcommerceSection from './EcommerceSection';

const MainContent = () => {
  return (
    <main className={styles.main}>
      <HeroSection/>
      {/* <EcommerceSection /> */}
    </main>
  );
};

export default MainContent;
