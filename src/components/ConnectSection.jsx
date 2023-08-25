import React from 'react'
import ConnectCard from './Resources/ConnectCard'
import User1 from "../assets/images/user-cover-4.png"
import User2 from "../assets/images/fixed-height sec-.png"
import User3 from "../assets/images/user-cover-1.png"
import User4 from "../assets/images/user-cover-2.png"
import styles from "./ConnectSection.module.css"

export default function ConnectSection() {
  return (
    <section className={styles.ConnectSection}>
      <div className={styles.ConnectSectionContent}>
      <div className={styles.team}>
        <p className={styles.pinkText}>Team</p>
        <h1>Get Quality Education</h1>
        <p className={styles.greyText}>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className={styles.users}>
          <ConnectCard cardImage={ User1} cardName={"Julian Jameson"}/>
          <ConnectCard cardImage={ User2} cardName={"Julian Jameson"}/>
          <ConnectCard cardImage={ User3} cardName={"Julian Jameson"}/>
        <ConnectCard cardImage={User4} cardName={"Julian Jameson"} />
        </div>
      </div>
    </section>
  )
}
