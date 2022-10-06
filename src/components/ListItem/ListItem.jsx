import React from "react";
import styles from "./ListItem.module.css";
import digitFixer from "../../utils/digitFixer";

const ListItem = ({ symbol, convert, price, change, volume }) => {
  return (
    <div className={styles.container}>
      <button>Add to fav</button>
      <p>
        {symbol} / {convert}
      </p>
      <p>{digitFixer(price, 2)}</p>
      <p>{digitFixer(change, 2)}</p>
      <p>{digitFixer(volume, 0)}</p>
    </div>
  );
};

export default ListItem;
