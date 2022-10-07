import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useMultipleFetch from "../../hooks/useMultipleFetch";
import styles from "./CryptoDetail.module.css";

const CryptoDetail = () => {
  let { id } = useParams();
  const {
    result: metaData,
    error: metaError,
    isLoaded: metaIsLoaded,
  } = useFetch(`http://localhost:5000/metadata/${id}`);
  const {
    result: price,
    error: priceError,
    isLoaded: priceIsLoaded,
  } = useFetch(`http://localhost:5000/price/${id}`);
  return (
    <>
      {!metaIsLoaded ? (
        <p>Loading...</p>
      ) : metaError ? (
        <p>Error occurred</p>
      ) : (
        <div className={styles.container}>
          <img src={metaData.data[1].logo} alt="" />
          <p>{metaData.data[1].name}</p>
        </div>
      )}
    </>
  );
};

export default CryptoDetail;
