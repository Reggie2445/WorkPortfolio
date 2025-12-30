import React from "react";
import { getImageURL } from "../../utlis";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Reggie</h1>
        <p className={styles.description}>
          I'm a computer science student at Drexel University with hands-on
          experience building and shipping real software. I've worked across
          full-stack web apps, testing frameworks, and automation, using tools
          like React, JavaScript, Python, Java, and Firebase. I care a lot about
          clean code, scalability, and writing things that are actually usable.
          I'm especially interested in roles where I can keep learning, work on
          real products, and make a visible impact through the software I build.
        </p>
        <a href="mailto:re366@drexel.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageURL("hero/narutoFamily.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
