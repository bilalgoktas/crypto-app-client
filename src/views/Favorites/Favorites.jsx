import React, { useContext, useState } from "react";
import styles from "./Favorites.module.css";
import ListItem from "../../components/ListItem/ListItem";
import { AppContext } from "../../contexts/AppContext";
import searchIcon from "../../assets/svg/search.svg";

const Favorites = () => {
  const { favCryptos, currentFiat } = useContext(AppContext);
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <h2>Favorites</h2>
      <div className={styles.searchContainer}>
        <img src={searchIcon} alt="" />
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Type to search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th className={styles.name}>Name</th>
          <th className={styles.price}>Price ({currentFiat.symbol})</th>
          <th className={styles.change}>Change 24h</th>
          <th className={styles.volume}>Volume ({currentFiat.symbol})</th>
        </tr>
        {favCryptos
          .filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.symbol.toLowerCase().includes(query.toLowerCase())
              ? item
              : null
          )
          .map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              symbol={item.symbol}
              name={item.name}
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
