import React, { useContext, useState } from "react";
import styles from "./Favorites.module.css";
import ListItem from "../../components/ListItem/ListItem";
import { AppContext } from "../../contexts/AppContext";
import searchIcon from "../../assets/svg/search.svg";
import List from "../../components/List/List";

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

      <List
        data={favCryptos.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.symbol.toLowerCase().includes(query.toLowerCase())
            ? item
            : null
        )}
      />
    </div>
  );
};

export default Favorites;
