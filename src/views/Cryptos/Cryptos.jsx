import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Cryptos.module.css";
import searchIcon from "../../assets/svg/search.svg";
import List from "../../components/List/List";
import { URI } from "../../settings/config";

const Cryptos = () => {
  const [query, setQuery] = useState("");

  const { data, error, isLoaded } = useFetch(`${URI}/cryptos`);

  return (
    <div className={styles.container}>
      <h2>Coins / Tokens</h2>
      <div className={styles.searchContainer}>
        <img src={searchIcon} alt="" />
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Type to search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {!isLoaded ? (
        <td>Loading...</td>
      ) : error ? (
        <td>Error occurred</td>
      ) : (
        <List
          data={data.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.symbol.toLowerCase().includes(query.toLowerCase())
              ? item
              : null
          )}
        />
      )}
    </div>
  );
};

export default Cryptos;
