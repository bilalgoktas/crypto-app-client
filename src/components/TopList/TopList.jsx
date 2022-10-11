import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import useFetch from "../../hooks/useFetch";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import styles from "./TopList.module.css";

const TopList = () => {
  const { currentFiat } = useContext(AppContext);

  const { data, error, isLoaded } = useFetch("http://localhost:5000/top10");

  return (
    <div className={styles.container}>
      <h2>TOP 10</h2>
      {!isLoaded ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        <List data={data} error={error} isLoaded={isLoaded} />
      )}

      <div className={styles.link}>
        <Link className={styles.linkItem} to="/cryptos">
          See more cryptocurrencies
        </Link>
      </div>
    </div>
  );
};

export default TopList;
