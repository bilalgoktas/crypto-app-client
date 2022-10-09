import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import useFetch from "../../hooks/useFetch";
import ListItem from "../ListItem/ListItem";
import styles from "./TopList.module.css";

const TopList = () => {
  const { currentFiat } = useContext(AppContext);

  const { data, error, isLoaded } = useFetch(
    `http://localhost:5000/top20?convert=${currentFiat.name}`
  );

  return (
    <div className={styles.container}>
      <h2>TOP 20</h2>
      <table>
        <tr>
          <th></th>
          <th className={styles.rank}>Rank</th>
          <th></th>
          <th className={styles.name}>Name</th>
          <th className={styles.price}>Price ({currentFiat.symbol})</th>
          <th className={styles.change}>Change 24h</th>
          <th className={styles.volume}>Volume ({currentFiat.symbol})</th>
        </tr>
        {!isLoaded ? (
          <td>Loading...</td>
        ) : error ? (
          <td>Error occurred</td>
        ) : (
          data.data.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              rank={item.cmc_rank}
              name={item.name}
              symbol={item.symbol}
              price={item.quote[currentFiat.name]?.price}
              change={item.quote[currentFiat.name]?.percent_change_24h}
              volume={item.quote[currentFiat.name]?.volume_24h}
            />
          ))
        )}
      </table>
      <div className={styles.link}>
        <Link to="/cryptos">See more cryptocurrencies</Link>
      </div>
    </div>
  );
};

export default TopList;
