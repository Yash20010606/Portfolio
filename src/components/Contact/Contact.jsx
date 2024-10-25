import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

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
            src={getImageUrl("contact/email.png")}
            alt="Email icon"
            className={styles.emailIcon}
          />
          <a href="mailto:nimendyayashini2001@gmail.com">
            nimendyayashini2001@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
            className={styles.linkedinIcon}
          />
          <a href="https://www.linkedin.com/in/yashini-nimendya-a294ab242/">
            https://www.linkedin.com/in/yashini-nimendya-a294ab242/
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/github.png")}
            alt="LinkedIn icon"
            className={styles.githubIcon}
          />
          <a href="https://github.com/Yashini2001661">
            https://github.com/Yashini2001661
          </a>
        </li>
      </ul>
    </footer>
  );
};
