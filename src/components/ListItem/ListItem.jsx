import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ListItem.module.css";
import digitFixer from "../../utils/digitFixer";
import { AppContext } from "../../contexts/AppContext";

const ListItem = ({ id, symbol, price, change, volume }) => {
  const { favCryptos, addToFav, removeFromFav, currentFiat } =
    useContext(AppContext);
  const listItem = { id, symbol, price, change, volume };

  return (
    <Link to={`/cryptos/${id}`}>
      <div className={styles.container}>
        {favCryptos.some((item) => item.id === id) ? (
          <button onClick={(e) => removeFromFav(e, id)}>Remove from fav</button>
        ) : (
          <button onClick={(e) => addToFav(e, listItem)}>Add to fav</button>
        )}
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
