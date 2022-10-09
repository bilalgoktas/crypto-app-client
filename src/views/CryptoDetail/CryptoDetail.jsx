import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import useFetch from "../../hooks/useFetch";
import styles from "./CryptoDetail.module.css";
import digitFixer from "../../utils/digitFixer";
import starSolid from "../../assets/svg/star-solid.svg";
import starRegular from "../../assets/svg/star-regular.svg";

const CryptoDetail = () => {
  const { favCryptos, addToFav, removeFromFav, currentFiat } =
    useContext(AppContext);
  let { id } = useParams();
  const {
    data: metaData,
    error: metaError,
    isLoaded: metaIsLoaded,
  } = useFetch(`http://localhost:5000/metadata/${id}`);
  const {
    data: price,
    error: priceError,
    isLoaded: priceIsLoaded,
  } = useFetch(`http://localhost:5000/price/${id}`);

  const listItem = {
    id: metaData?.data[1]?.id,
    symbol: metaData?.data[1].symbol,
    name: metaData?.data[1].name,
    price: price?.data[1].quote[currentFiat].price,
    change: price?.data[1].quote[currentFiat].percent_change_24h,
    volume: price?.data[1].quote[currentFiat].volume_24h,
  };

  return (
    // Change fav handler filter id woth param id when api works!!!
    <>
      {!metaIsLoaded ? (
        <p>Loading...</p>
      ) : metaError ? (
        <p>Error occurred</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <img src={metaData.data[1].logo} alt="" />
              <div className={styles.name}>
                <p>{listItem.symbol}</p>
                <p>{listItem.name}</p>
              </div>
            </div>
            <div className={styles.topRight}>
              <div className={styles.favBtn}>
                {favCryptos.some(
                  (item) => item.id === metaData?.data[1]?.id
                ) ? (
                  <button
                    onClick={(e) => removeFromFav(e, metaData?.data[1]?.id)}
                  >
                    <img src={starSolid} alt="" /> Remove from favorites
                  </button>
                ) : (
                  <button onClick={(e) => addToFav(e, listItem)}>
                    <img src={starRegular} alt="" /> Add to favorites
                  </button>
                )}
              </div>
              <div className={styles.priceChange}>
                <p>{digitFixer(listItem.price, 2)}</p>
                <p className={styles.change}>
                  <span className={styles.label}>Last 24h Change</span>
                  {digitFixer(listItem.change, 2)}
                </p>
              </div>

              <p className={styles.volume}>
                <span className={styles.label}>Last 24h Volume</span>
                {digitFixer(listItem.volume, 0)}
              </p>
            </div>
          </div>

          <div className={styles.bottomContainer}>
            <p>{metaData.data[1].description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CryptoDetail;
