import React from 'react'
import styles from "./PackageSection.module.css"

export default function PackageSection() {
  return (
      <section className={styles.PackageSection}>
        <div className={styles.packageSectionContent}>
          <div className={styles.teachersSectionContent}>
            <div className={styles.team}>
             <p className={styles.pinkText}>Practice Advice</p>
             <h1>Our Experts Teacher</h1>
              <p className={styles.greyText}>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            </div>
              <div className={styles.teacher}>
             </div>
        </div>
   </section>
  )
}
