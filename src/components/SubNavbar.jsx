import React from 'react';
import styles from "./SubNavbar.module.css";
import { FiChevronRight } from 'react-icons/fi';

const SubNavbar = () => {
  return (
    <div className={ styles.subnavbar }>
      <a href="/#">Home</a> <span className={ styles.icon }>&gt;</span> <a href="/#">Template</a><span className={ styles.icon }>&gt;</span><p>School Premier <span className={ styles.reducedtext }>- Basic Html Template</span> ...</p>
    </div>
  );
};

export default SubNavbar;
