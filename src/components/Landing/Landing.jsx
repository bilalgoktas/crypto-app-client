import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>C</span>OINN
      </h1>
      <h3>Just keep updated!</h3>
      <div className={styles.buttons}>
        <Link className={styles.link} to="/cryptos">
          All Currencies
        </Link>
        <Link className={styles.link} to="/news">
          Recent News
        </Link>
      </div>
    </div>
  );
};

export default Landing;
