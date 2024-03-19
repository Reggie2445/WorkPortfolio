import React from "react";
import { getImageURL } from "../../utlis";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutImage.png")}
          alt="me sitting with a laptop"
          className={styles.aboutImage}
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageURL("about/cursorIcon.png")}
              alt="Cursor icon"
            ></img>
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I'm a frontend developer with experience in building responsive and optimized sites </p>

            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageURL("about/serverIcon.png")}
              alt="Server icon"
            ></img>
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I have experience developing fast and optimized systems and APIs </p>

            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageURL("about/uiIcon.png")}
              alt="Ui icon"
            ></img>
            <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>I have designed multiple landing pages and have systems as well </p>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
