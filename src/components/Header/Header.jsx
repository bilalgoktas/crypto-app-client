import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link className={styles.link} to="/cryptos">
          Cryptocurrencies
        </Link>
      </div>
      <div className={styles.centerContainer}>
        <Link className={styles.link} to="/">
          COINN
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <Link className={styles.link} to="/favorites">
          Favorites
        </Link>
        <span>USD</span>
        <span>Dark Theme</span>
      </div>
    </div>
  );
};

export default Header;
