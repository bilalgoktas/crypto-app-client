import React, { useEffect, useState } from "react";
import styles from "./PopularCard.module.css";
import digitFixer from "../../utils/digitFixer";

const PopularCard = ({ index, item }) => {
  const [popPrices, setPopPrices] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const priceUrls = [
      "http://localhost:5000/price/1",
      "http://localhost:5000/price/2",
      "http://localhost:5000/price/3",
    ];
    Promise.all(priceUrls.map((url) => fetch(url)))
      .then((results) => Promise.all(results.map((result) => result.json())))
      .then((data) => setPopPrices(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  });
  return (
    <>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.topSection}>
            <img src={item.data[1].logo} alt={item.data[1].name} />
            <div className={styles.change}>
              <p className={styles.period}>Last 24hrs</p>
              <p className={styles.percentage}>
                {digitFixer(
                  popPrices[index].data[1].quote["USD"].percent_change_24h,
                  2
                )}
                %
              </p>
            </div>
          </div>
          <p className={styles.coinName}>
            {item.data[1].symbol} <span>{item.data[1].name}</span>
          </p>
          <p className={styles.price}>
            <span>$</span>
            {digitFixer(popPrices[index].data[1].quote["USD"].price, 2)}
          </p>
          <div className={styles.volume}>
            <p>Volume in last 24hrs</p>
            <p className={styles.volumeNumber}>
              ${digitFixer(popPrices[index].data[1].quote["USD"].volume_24h, 0)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularCard;
