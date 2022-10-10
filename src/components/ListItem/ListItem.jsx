import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ListItem.module.css";
import digitFixer from "../../utils/digitFixer";
import { AppContext } from "../../contexts/AppContext";
import starSolid from "../../assets/svg/star-solid.svg";
import starRegular from "../../assets/svg/star-regular.svg";
import useFetch from "../../hooks/useFetch";

const ListItem = ({ id, symbol, name, price, change, volume, rank }) => {
  const { favCryptos, addToFav, removeFromFav, currentFiat } =
    useContext(AppContext);
  const listItem = { id, symbol, name, price, change, volume };

  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate(`/crypto/${id}`);
  };

  const { data, error, isLoaded } = useFetch(
    `http://localhost:5000/metadata?id=${id}`
  );

  return (
    <>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
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
          {rank && <td className={styles.rank}>{rank}</td>}
          <td className={styles.logo}>
            <img src={data.data[1].logo} alt={name} />
          </td>
          <td className={styles.name}>
            <span>{symbol}</span>
            <span>{name}</span>
          </td>
          <td className={styles.price}>{digitFixer(price, 2)}</td>
          <td className={styles.change}>{digitFixer(change, 2)}%</td>
          <td className={styles.volume}>{digitFixer(volume, 0)}</td>
        </tr>
      )}
    </>
  );
};

export default ListItem;
