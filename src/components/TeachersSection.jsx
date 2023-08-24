import React from 'react';
import styles from "./TeacherSection.module.css"
import TeacherCard from './Resources/TeacherCard';
import teacherImage1 from "../assets/images/testimonial-user-cover-124.png"
import teacherImage2 from "../assets/images/testimonial-user-cover-167.png"
import teacherImage3 from  "../assets/images/testimonial-user-cover-169.png"

const TeachersSection = () => {
    return (
        <section className={styles.teachersSection}>
      <div className={styles.team}>
        <p className={styles.pinkText}>Practice Advice</p>
        <h1>Our Experts Teacher</h1>
        <p className={styles.greyText}>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className={styles.teacher}>
        <TeacherCard teacherImage={teacherImage1}/>
        <TeacherCard teacherImage={teacherImage2} />
        <TeacherCard teacherImage={teacherImage3}/>
        </div>
    </section>
    );
}

export default TeachersSection;
