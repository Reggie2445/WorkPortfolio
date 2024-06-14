import React from "react";
import { getImageURL } from "../../utlis";
import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/emailIcon.png")}
            alt="Email icon"
          ></img>
          <a href="mailto:re366@drexel.edu">re366@drexel.edu</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          ></img>
          <a href="https://www.linkedin.com/in/reggie-easton/">linkedin.com/in/reggie-easton</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/githubIcon.png")}
            alt="Github icon"
          ></img>
          <a href="https://github.com/Reggie2445">github.com/Reggie2445</a>
        </li>
      </ul>
    </footer>
  );
};
