import React from "react";
import { getImageURL } from "../../utlis";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Reggie</h1>
        <p className={styles.description}>
        A talented computer science student at Drexel University, with experience in software development, testing, and automation. Skilled in Python, Java, HTML/CSS, JavaScript, and Bash scripting. Adept at test-driven development, creating user-friendly web apps with React, and utilizing technologies like GraphQL and Firebase. Passionate about problem-solving, delivering high-quality solutions, and driving continuous improvement through rigorous testing.
        </p>
        <a href="mailto:re366@drexel.edu" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageURL("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
