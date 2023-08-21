import React from 'react'
import Button from './Resources/Button'
import styles from "./NewsLetter.module.css"

export default function NewsLetter() {
  return (
      <section className={styles.NewsLetterSection}>
          <div>
              <p className={styles.pinkText}>Newsletter</p>
              <h2>Our Popular Courses</h2>
              <p>Problems trying to resolve the conflict between </p>
              <p>the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
          <div className={styles.formInput}>
              <input type="email" name="email" id={styles.email} placeholder='Your Email'/>
              <Button><p>Subcribe</p></Button>
          </div>
  </section>
  )
}
