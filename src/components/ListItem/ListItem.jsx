import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ListItem.module.css";
import digitFixer from "../../utils/digitFixer";
import { AppContext } from "../../contexts/AppContext";

const ListItem = ({ id, symbol, price, change, volume }) => {
  const { favCryptos, addToFav, removeFromFav } = useContext(AppContext);
  const listItem = { id, symbol, price, change, volume };
  const { currentFiat } = useContext(AppContext);

  return (
    <Link to={`/cryptos/${id}`}>
      <div className={styles.container}>
        <button
          onClick={
            favCryptos.some((item) => item.id === id)
              ? (e) => removeFromFav(e, id)
              : (e) => addToFav(e, listItem)
          }
        >
          {favCryptos.some((item) => item.id === id) ? (
            <p>Remove from Fav</p>
          ) : (
            <p>Add to Fav</p>
          )}
        </button>
        <p>
          {symbol} / {currentFiat}
        </p>
        <p>{digitFixer(price, 2)}</p>
        <p>{digitFixer(change, 2)}</p>
        <p>{digitFixer(volume, 0)}</p>
      </div>
    </Link>
  );
};

export default ListItem;
