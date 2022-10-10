import React, { useState } from "react";
import useMultipleFetch from "../../hooks/useMultipleFetch";
import PopularCard from "../PopularCard/PopularCard";
import styles from "./Populars.module.css";

const Populars = () => {
  const [metaDataUrls, setMetaDataUrls] = useState([
    "http://localhost:5000/metadata",
    "http://localhost:5000/metadata",
    "http://localhost:5000/metadata",
  ]);

  const { data, error, isLoaded } = useMultipleFetch(metaDataUrls);

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        data.map((item, index) => (
          <PopularCard key={index} index={index} item={item} />
        ))
      )}
    </div>
  );
};

export default Populars;
