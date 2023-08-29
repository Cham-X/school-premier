import React from 'react';
import styles from "./MainContent.module.css";
import NewsLetter from './NewsLetter';
import ClientSection from './ClientSection';
import ClientMatterSection from './ClientMatterSection';
import ConnectSection from './ConnectSection';
import TeachersSection from './TeachersSection';
import Hero from './Hero';
import QualitySection from './QualitySection';
import PackageSection from './PackageSection';


const MainContent = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <QualitySection/>
      <ClientMatterSection/>
      <ClientSection />
      <PackageSection/>
      <TeachersSection/>
      <ConnectSection/>
      <NewsLetter/>
    </main>
  );
};

export default MainContent;
