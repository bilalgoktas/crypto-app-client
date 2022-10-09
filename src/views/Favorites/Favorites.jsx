import React, { useContext } from "react";
import styles from "./Favorites.module.css";
import ListItem from "../../components/ListItem/ListItem";
import { AppContext } from "../../contexts/AppContext";

const Favorites = () => {
  const { favCryptos } = useContext(AppContext);
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
        {favCryptos.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            symbol={item.symbol}
            convert={item.convert}
            price={item.price}
            change={item.change}
            volume={item.volume}
          />
        ))}
      </table>
    </div>
  );
};

export default Favorites;
