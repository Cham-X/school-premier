import React from 'react';
import styles from "./SubNavbar.module.css";

const SubNavbar = () => {
  return (
    <div className={ styles.subnavbar }>
      <a href="/#">Home</a> <span>&gt;</span> <a href="/#">Template</a><span>&gt;</span><p>School Premier <span className={ styles.reducedtext }>- Basic Html Template</span> ...</p>
    </div>
  );
};

export default SubNavbar;
