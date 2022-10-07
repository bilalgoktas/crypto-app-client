import React from "react";
import ListItem from "../../components/ListItem/ListItem";
import useFetch from "../../hooks/useFetch";
import styles from "./Cryptos.module.css";

const Cryptos = () => {
  const { data, error, isLoaded } = useFetch("http://localhost:5000/all");

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        data.data?.map((item) => (
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
    </div>
  );
};

export default Cryptos;
