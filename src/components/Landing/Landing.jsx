import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>C</span>OINN
      </h1>
      <h3>Just keep updated!</h3>
      <div className={styles.buttons}>
        <button>All Currencies</button>
        <button>Recent News</button>
      </div>
    </div>
  );
};

export default Landing;
