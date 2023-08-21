import React from 'react';
import styles from "./MainContent.module.css";
import  HeroSection from "./HeroSection"
import NewsLetter from './NewsLetter';
import ClientSection from './ClientSection';


const MainContent = () => {
  return (
    <main className={styles.main}>
      <HeroSection/>
       <ClientSection/>
      <NewsLetter/>
    </main>
  );
};

export default MainContent;
