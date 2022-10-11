import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./PopularCard.module.css";
import digitFixer from "../../utils/digitFixer";
import useFetch from "../../hooks/useFetch";
import { AppContext } from "../../contexts/AppContext";

const PopularCard = ({ item }) => {
  const { currentFiat } = useContext(AppContext);

  const { data, error, isLoaded } = useFetch(
    `http://localhost:5000/popprice?id=${item.id}`
  );
  return (
    <>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        <Link className={styles.link} to={`/crypto/${item.id}`}>
          <div className={styles.container}>
            <div className={styles.topSection}>
              <img src={item.logo} alt={item.name} />
              <div className={styles.change}>
                <p className={styles.period}>Last 24hrs</p>
                <p className={styles.percentage}>
                  {digitFixer(
                    data.quote[currentFiat.name].percent_change_24h,
                    2
                  )}
                  %
                </p>
              </div>
            </div>
            <p className={styles.coinName}>
              {item.symbol} <span>{item.name}</span>
            </p>
            <p className={styles.price}>
              <span>{currentFiat.symbol}</span>
              {digitFixer(data.quote[currentFiat.name]?.price, 2)}
            </p>
            <div className={styles.volume}>
              <p>Volume in last 24hrs</p>
              <p className={styles.volumeNumber}>
                ${digitFixer(data.quote[currentFiat.name]?.volume_24h, 0)}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default PopularCard;
