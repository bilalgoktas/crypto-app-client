import React, { useEffect, useState } from "react";
import ListItem from "../../components/ListItem/ListItem";
import styles from "./Cryptos.module.css";

const Cryptos = () => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/all")
      .then((response) => response.json())
      .then((list) => setCryptos(list))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        cryptos.data.map((item) => (
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
