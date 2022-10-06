import React, { useContext } from "react";
import styles from "./Favorites.module.css";
import ListItem from "../../components/ListItem/ListItem";
import { AppContext } from "../../contexts/AppContext";

const Favorites = () => {
  const { favCryptos } = useContext(AppContext);
  return (
    <div className={styles.container}>
      {favCryptos.map((item) => (
        <ListItem
          id={item.id}
          symbol={item.symbol}
          convert={item.convert}
          price={item.price}
          change={item.change}
          volume={item.volume}
        />
      ))}
    </div>
  );
};

export default Favorites;
