import React from "react";
import styles from "./PopularCard.module.css";
import digitFixer from "../../utils/digitFixer";
import useFetch from "../../hooks/useFetch";

const PopularCard = ({ index, item }) => {
  const { data, error, isLoaded } = useFetch(`http://localhost:5000/price/1`);
  console.log();
  return (
    <>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.topSection}>
            <img
              src={item.data[parseInt(Object.keys(item.data)[0])].logo}
              alt={item.data[parseInt(Object.keys(item.data)[0])].name}
            />
            <div className={styles.change}>
              <p className={styles.period}>Last 24hrs</p>
              <p className={styles.percentage}>
                {digitFixer(data.data[1].quote["USD"].percent_change_24h, 2)}%
              </p>
            </div>
          </div>
          <p className={styles.coinName}>
            {item.data[parseInt(Object.keys(item.data)[0])].symbol}{" "}
            <span>{item.data[parseInt(Object.keys(item.data)[0])].name}</span>
          </p>
          <p className={styles.price}>
            <span>$</span>
            {digitFixer(data.data[1].quote["USD"].price, 2)}
          </p>
          <div className={styles.volume}>
            <p>Volume in last 24hrs</p>
            <p className={styles.volumeNumber}>
              ${digitFixer(data.data[1].quote["USD"].volume_24h, 0)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularCard;
