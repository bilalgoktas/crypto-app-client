import React from "react";
import PopularCard from "../PopularCard/PopularCard";
import styles from "./Populars.module.css";

const Populars = ({ popMetaDatas, popPrices }) => {
  return (
    <div className={styles.container}>
      {popMetaDatas.map((item, index) => (
        <PopularCard
          key={index}
          index={index}
          item={item}
          popPrices={popPrices}
        />
      ))}
    </div>
  );
};

export default Populars;
