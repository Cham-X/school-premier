import React from 'react';
import styles from "./MainContent.module.css";
import  HeroSection from "./HeroSection"
import NewsLetter from './NewsLetter';
import ClientSection from './ClientSection';
import ClientMatterSection from './ClientMatterSection';
import ConnectSection from './ConnectSection';


const MainContent = () => {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ClientMatterSection/>
      <ClientSection />
      <ConnectSection/>
      <NewsLetter/>
    </main>
  );
};

export default MainContent;
