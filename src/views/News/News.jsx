import React from "react";
import styles from "./News.module.css";
import underConstruction from "../../assets/svg/under-construction.svg";

const News = () => {
  return (
    <div className={styles.container}>
      <img src={underConstruction} alt="" />
      <h1>Under construction...</h1>
    </div>
  );
};

export default News;
