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

  const { result, error, isLoaded } = useMultipleFetch(metaDataUrls);

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        result.map((item, index) => (
          <PopularCard key={index} index={index} item={item} />
        ))
      )}
    </div>
  );
};

export default Populars;
