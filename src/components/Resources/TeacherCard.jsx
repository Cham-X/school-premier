import React from 'react';
import styles from "./TeacherCard.module.css"
import star1 from "../../assets/images/icn bx-star.png"
import star2 from "../../assets/images/icn bxs-star.png"

const TeacherCard = ({teacherImage}) => {
    return (
        <article className={styles.teacherCard}>
            <div className={styles.stars}>
               <img src={star2} alt="star" />
               <img src={star2} alt="star" />
               <img src={star2} alt="star" />
               <img src={star2} alt="star" />
               <img src={star1} alt="star" />
            </div>
            <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
            <div className={styles.teacherProfile}>
                <img src={`${teacherImage}`} alt="teacherImage" />
                <div>
                    <p className={styles.teacherName}>Regina Miles</p>
                    <p>Designer</p>
                </div>
            </div>
       </article>
    );
}

export default TeacherCard;
