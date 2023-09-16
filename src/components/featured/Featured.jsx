import React from 'react'
import styles from "./featured.module.css";
import Pagination from '../pagination/Pagination';
import Image from 'next/image';

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, zakidev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur reiciendis?</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus fugit tenetur rem possimus! Dolores vero magnam omnis dolorum assumenda illo! Motur rem possimus! Dolores vero magnam omnis dolorum assumenda illo! Modi, cum? Fugit in libero excepturi, explicabo dolor quisquam amet.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default CardList