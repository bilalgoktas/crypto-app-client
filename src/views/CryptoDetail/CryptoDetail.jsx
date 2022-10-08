import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import useFetch from "../../hooks/useFetch";
import styles from "./CryptoDetail.module.css";

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
    id: metaData?.data[1].id,
    symbol: metaData?.data[1].symbol,
    name: metaData?.data[1].name,
    price: price?.data[1].quote[currentFiat].price,
    change: price?.data[1].quote[currentFiat].percent_change_24h,
    volume: price?.data[1].quote[currentFiat].volume_24h,
  };

  return (
    <>
      {!metaIsLoaded ? (
        <p>Loading...</p>
      ) : metaError ? (
        <p>Error occurred</p>
      ) : (
        <div className={styles.container}>
          <img src={metaData.data[1].logo} alt="" />
          <p>{listItem.symbol}</p>
          <p>{listItem.name}</p>
          <p>{metaData.data[1].description}</p>
          <p>{listItem.price}</p>
          <p>{listItem.volume}</p>
          <p>{listItem.change}</p>
          <button
            onClick={
              favCryptos.some((item) => item.id === listItem.id)
                ? (e) => removeFromFav(e, listItem.id)
                : (e) => addToFav(e, listItem)
            }
          >
            {favCryptos.some((item) => item.id === listItem.id) ? (
              <p>Remove from Fav</p>
            ) : (
              <p>Add to Fav</p>
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default CryptoDetail;
