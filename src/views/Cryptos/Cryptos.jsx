import React, { useContext } from "react";
import ListItem from "../../components/ListItem/ListItem";
import { AppContext } from "../../contexts/AppContext";
import useFetch from "../../hooks/useFetch";
import styles from "./Cryptos.module.css";

const Cryptos = () => {
  const { currentFiat } = useContext(AppContext);
  const { data, error, isLoaded } = useFetch("http://localhost:5000/all");

  return (
    <div className={styles.container}>
      <table>
        <tr>
          <th></th>
          <th className={styles.name}>Name</th>
          <th className={styles.price}>Price</th>
          <th className={styles.change}>Change 24h</th>
          <th className={styles.volume}>Volume</th>
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
              symbol={item.symbol}
              price={item.quote[currentFiat]?.price}
              change={item.quote[currentFiat]?.percent_change_24h}
              volume={item.quote[currentFiat]?.volume_24h}
            />
          ))
        )}
      </table>
    </div>
  );
};

export default Cryptos;
