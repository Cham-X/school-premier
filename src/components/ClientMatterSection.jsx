import React from 'react'
import styles from "./ClientMatterSection.module.css"
import thumb from "../assets/images/thumb-concept.png"
import greaterThan from "../assets/images/@none.png"

export default function ClientMatterSection() {
  return (
      <section className={styles.ClientMatterSection}>
          <img src={thumb} alt="thumb" className={styles.thumbImage} />
          <article className={styles.ClientMatterSectionRight}>
              <div className={styles.line}></div>
              <h2>Every Client <br />Matters</h2>
              <p>Problems trying to resolve the conflict between the two major realms of Classical physics: <br /> Newtonian mechanics </p>
              <p className={styles.learnMore}>Learn More <span><img src={greaterThan} alt="" /></span></p>
          </article>
    </section>
  )
}
