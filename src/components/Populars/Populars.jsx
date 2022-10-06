import React, { useState } from "react";
import useMultipleFetch from "../../hooks/useMultipleFetch";
import PopularCard from "../PopularCard/PopularCard";
import styles from "./Populars.module.css";

const Populars = () => {
  const [metaDataUrls, setMetaDataUrls] = useState([
    "http://localhost:5000/metadata/1",
    "http://localhost:5000/metadata/2",
    "http://localhost:5000/metadata/3",
  ]);

  const { data, error, isLoaded } = useMultipleFetch(metaDataUrls);

  const [priceUrls, setPriceUrls] = useState([
    "http://localhost:5000/price/1",
    "http://localhost:5000/price/2",
    "http://localhost:5000/price/3",
  ]);

  const prices = useMultipleFetch(priceUrls).data;

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        data.map((item, index) => (
          <PopularCard key={index} index={index} item={item} prices={prices} />
        ))
      )}
    </div>
  );
};

export default Populars;
