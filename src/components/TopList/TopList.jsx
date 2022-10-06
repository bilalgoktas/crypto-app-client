import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useFetch from "../../hooks/useFetch";
import ListItem from "../ListItem/ListItem";
import styles from "./TopList.module.css";

const TopList = () => {
  const { currentFiat } = useContext(AppContext);

  const { result, error, isLoaded } = useFetch(
    `http://localhost:5000/top20?convert=${currentFiat}`
  );

  return (
    <ul>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        result.data.map((item) => (
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
    </ul>
  );
};

export default TopList;
