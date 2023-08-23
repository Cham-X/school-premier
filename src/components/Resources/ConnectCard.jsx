import React from 'react'
import styles from "./ConnectCard.module.css"
import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa'


export default function ConnectCard({cardImage,cardName}) {
  return (
      <article className={styles.connectCard}>
          <img src={cardImage} alt="cardImage" /> 
          <div className={styles.cardContent}> 
          <h3>{cardName}</h3>
          <p>Profession</p>
          <ul>
              <li><FaFacebook/></li>
              <li><FaInstagram/></li>
              <li><FaTwitter/></li>
          </ul>
          </div>
  </article>
  )
}
