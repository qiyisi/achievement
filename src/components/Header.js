import React from "react";
import styles from "../css/Header.module.css";

console.log(styles);

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_title}>ACHIEVEMENT</div>
    </header>
  );
}

export default Header;
