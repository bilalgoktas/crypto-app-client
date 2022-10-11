import React from "react";
import styles from "./BackDrop.module.css";

const BackDrop = ({ setIsSideMenuOpen }) => (
  <div
    className={styles.backdrop}
    onClick={() => setIsSideMenuOpen((prevState) => !prevState)}
  />
);

export default BackDrop;
