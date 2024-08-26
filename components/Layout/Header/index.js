import React from "react";
import Image from "next/image";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image width="64" height="64" src="/images/logo.png" alt="logo" />
    </div>
  );
};

export default Header;
