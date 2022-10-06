import React from "react";
import styles from "./TopList.module.css";

const TopList = () => {
  return (
    <ul>
      {topTwenty.map((item, index) => (
        <ListItem />
      ))}
    </ul>
  );
};

export default TopList;
