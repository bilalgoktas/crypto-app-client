import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ListItem.module.css";
import digitFixer from "../../utils/digitFixer";
import { AppContext } from "../../contexts/AppContext";
import starSolid from "../../assets/svg/star-solid.svg";
import starRegular from "../../assets/svg/star-regular.svg";

const ListItem = ({ id, symbol, price, change, volume }) => {
  const { favCryptos, addToFav, removeFromFav, currentFiat } =
    useContext(AppContext);
  const listItem = { id, symbol, price, change, volume };

  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate(`/cryptos/${id}`);
  };

  return (
    <tr className={styles.rowContainer} onClick={handleRowClick}>
      <td className={styles.favBtn}>
        {favCryptos.some((item) => item.id === id) ? (
          <button onClick={(e) => removeFromFav(e, id)}>
            <img src={starSolid} alt="" />
          </button>
        ) : (
          <button onClick={(e) => addToFav(e, listItem)}>
            <img src={starRegular} alt="" />
          </button>
        )}
      </td>
      <td className={styles.name}>
        {symbol} / {currentFiat}
      </td>
      <td className={styles.price}>{digitFixer(price, 2)}</td>
      <td className={styles.change}>{digitFixer(change, 2)}</td>
      <td className={styles.volume}>{digitFixer(volume, 0)}</td>
    </tr>
  );
};

export default ListItem;
