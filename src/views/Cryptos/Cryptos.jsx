import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListItem from "../../components/ListItem/ListItem";
import { AppContext } from "../../contexts/AppContext";
import useFetch from "../../hooks/useFetch";
import styles from "./Cryptos.module.css";
import searchIcon from "../../assets/svg/search.svg";
import arrowLeft from "../../assets/svg/arrow-left.svg";
import arrowRight from "../../assets/svg/arrow-right.svg";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import List from "../../components/List/List";

const Cryptos = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const { currentFiat } = useContext(AppContext);
  const { data, error, isLoaded } = useFetch("http://localhost:5000/cryptos");

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
