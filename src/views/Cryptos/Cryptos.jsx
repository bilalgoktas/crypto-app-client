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

const Cryptos = () => {
  const [query, setQuery] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");

  const navigate = useNavigate();

  let { category, currentPage } = useParams();

  const { currentFiat } = useContext(AppContext);
  const { data, error, isLoaded } = useFetch(
    `http://localhost:5000/cryptos/${category}/${currentPage}`
  );

  const [totalCount, setTotalCount] = useState(500);
  const [perPage, setPerPage] = useState(20);
  const [totalPageCount, setTotalPageCount] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= totalCount / perPage; i++) {
      setTotalPageCount((prevState) => [...prevState, i]);
    }
  }, []);

  return (
    <div className={styles.container}>
      {console.log(totalPageCount)}
      {console.log(data?.data.length)}
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
      <table>
        <tr>
          <th></th>
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
          data.data
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
                name={item.name}
                symbol={item.symbol}
                price={item.quote[currentFiat.name]?.price}
                change={item.quote[currentFiat.name]?.percent_change_24h}
                volume={item.quote[currentFiat.name]?.volume_24h}
              />
            ))
        )}
      </table>
      <div className={styles.pageSwitcher}>
        <button
          onClick={() => {
            currentPage > 1 &&
              navigate(
                `/cryptos/${activeCategory}/${parseInt(currentPage) - 1}`
              );
          }}
        >
          <img src={arrowLeft} alt="" />
        </button>
        {totalPageCount.map((number) => (
          <Link
            className={classNames(
              styles.pageBtn,
              parseInt(currentPage) === number && styles.active
            )}
            key={number}
            to={`/cryptos/${activeCategory}/${number}`}
          >
            {number}
          </Link>
        ))}
        <button
          onClick={() => {
            currentPage < totalPageCount.length &&
              navigate(
                `/cryptos/${activeCategory}/${parseInt(currentPage) + 1}`
              );
          }}
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Cryptos;
