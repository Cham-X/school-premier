import React from 'react'
import styles from "./Card.module.css"

const Card = ({cardImg,cardTitle,cardText}) => {
  return (
    <article className={styles.card}>
      <img src={cardImg} alt="cardImage" />
      <div className={styles.line}></div>
      <h3 className={styles.cardTitle}>{cardTitle}</h3>
      <p className={styles.cardText}>{ cardText}</p>
   </article>
  )
}

export default Card
