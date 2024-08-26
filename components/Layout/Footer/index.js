import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      Made by{" "}
      <a className={styles.link} href="https://github.com/OleksiiKnihin">
        Oleksii Knihin
      </a>
    </div>
  );
};

export default Footer;
