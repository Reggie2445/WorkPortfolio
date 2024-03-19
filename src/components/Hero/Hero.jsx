import React from "react";
import { getImageURL } from "../../utlis";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Reggie</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you have any questions!
        </p>
        <a href="mailto:reggie.easton5@yahoo.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageURL("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
