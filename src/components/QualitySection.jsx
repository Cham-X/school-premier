import React from 'react'
import styles from "./QualitySection.module.css"
import Card from './Resources/Card'
import image1 from "../assets/images/fixed-width.png"
import image2 from "../assets/images/fixed-width (2).png"
import image3 from "../assets/images/fixed-width (3).png"


const data = [{
  id: 1,
  title: "training Courses",
  description: "The gradual accumulation of information about atomic and small-scale behaviour...",
  image:image1,
},
  {
  id: 2,
  title: "2,769 online courses	",
  description: "The gradual accumulation of information about atomic and small-scale behaviour...",
  image:image2,
  },
  {
  id: 3,
  title: "Books Liberary	",
  description: "The gradual accumulation of information about atomic and small-scale behaviour...",
  image:image3,
},
]

export default function QualitySection() {

  return (
      <section className={styles.qualitySection}>
          <div className={styles.teachersSectionContent}>
        <div className={styles.team}>
        <p className={styles.pinkText}>Practice Advice</p>
        <h1>Get Quality Education</h1>
        <p className={styles.greyText}>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
        <div className={styles.qualityCards}>
          {data.map((card) => {
            return (
              <Card key={card.id} cardImg={card.image} cardText={card.description} cardTitle={card.title} />
            )
          })}
        </div>
        </div>
  </section>
  )
}
