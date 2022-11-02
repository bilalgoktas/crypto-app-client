import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListItem.module.css";
import digitFixer from "../../utils/digitFixer";
import { AppContext } from "../../contexts/AppContext";
import starSolid from "../../assets/svg/star-solid.svg";
import starRegular from "../../assets/svg/star-regular.svg";
import useFetch from "../../hooks/useFetch";
import { URI } from "../../settings/config";

const ListItem = ({ id, symbol, name, quote, cmc_rank }) => {
  const { favCryptos, addToFav, removeFromFav, currentFiat } =
    useContext(AppContext);
  const listItem = { id, symbol, name, quote, cmc_rank };

  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate(`/crypto/${id}`);
  };

  const { data, error, isLoaded } = useFetch(`${URI}/metadata/${id}`);

  return (
    <>
      {!isLoaded ? (
        <tr>
          <td>Loading...</td>
        </tr>
      ) : error ? (
        <tr>
          <td>Error occurred</td>
        </tr>
      ) : (
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
          {cmc_rank && <td className={styles.rank}>{cmc_rank}</td>}
          <td className={styles.logo}>
            <img src={data.logo} alt={name} />
          </td>
          <td className={styles.name}>
            <span>{symbol}</span>
            <span>{name}</span>
          </td>
          <td className={styles.price}>
            {digitFixer(quote[currentFiat.name].price, 2)}
          </td>
          <td className={styles.change}>
            {digitFixer(quote[currentFiat.name].percent_change_24h, 2)}%
          </td>
          <td className={styles.volume}>
            {digitFixer(quote[currentFiat.name].volume_24h, 0)}
          </td>
        </tr>
      )}
    </>
  );
};

export default ListItem;
