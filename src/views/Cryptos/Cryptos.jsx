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
  const [activeCategory, setActiveCategory] = useState("all");

  const navigate = useNavigate();

  let { category } = useParams();

  const { currentFiat } = useContext(AppContext);
  const { data, error, isLoaded } = useFetch(
    `http://localhost:5000/cryptos/${category}?convert=${currentFiat.name}`
  );

  return (
    <div className={styles.container}>
      <div className={styles.categorySwitcher}>
        <Link
          onClick={(e) => setActiveCategory(e.target.innerText.toLowerCase())}
          className={classNames(
            styles.link,
            activeCategory === "all" && styles.active
          )}
          to="/cryptos/all"
        >
          ALL
        </Link>
        <Link
          onClick={(e) => setActiveCategory(e.target.innerText.toLowerCase())}
          className={classNames(
            styles.link,
            activeCategory === "coins" && styles.active
          )}
          to="/cryptos/coins"
        >
          COINS
        </Link>
        <Link
          onClick={(e) => setActiveCategory(e.target.innerText.toLowerCase())}
          className={classNames(
            styles.link,
            activeCategory === "tokens" && styles.active
          )}
          to="/cryptos/tokens"
        >
          TOKENS
        </Link>
      </div>

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
          data={data.data?.filter((item) =>
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
