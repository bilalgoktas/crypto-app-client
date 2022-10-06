import React from "react";
import useFetch from "../../hooks/useFetch";
import ListItem from "../ListItem/ListItem";
import styles from "./TopList.module.css";

const TopList = () => {
  const { data, error, isLoaded } = useFetch(
    "http://localhost:5000/top20?convert=USD"
  );

  return (
    <ul>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        data.data.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            symbol={item.symbol}
            convert={"USD"}
            price={item.quote["USD"].price}
            change={item.quote["USD"].percent_change_24h}
            volume={item.quote["USD"].volume_24h}
          />
        ))
      )}
    </ul>
  );
};

export default TopList;
