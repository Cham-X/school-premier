import React from 'react'
import styles from "./ClientSection.module.css";
import videoImage from "../assets/images/col-md-6.png"
import greaterThan from '../assets/images/@none.png'


export default function ClientSection() {
  return (
    <section className={styles.clientSection}>
      <div className={styles.ClientSectionContent}>
      <article className={styles.clientSectionLeft} >
          <div className={styles.line}></div>
          <h2>Watch our Courses</h2>
          <p>Problems trying to resolve the conflict between the two major realms of Classical physics: 
            Newtonian mechanics </p>
          <p className={styles.learnMore}>Learn More <span><img src={greaterThan} alt="" /></span></p>
        </article>
    <img src={videoImage} alt="videoImage" className={styles.videoImage} />
      </div>
 </section>
  )
}
