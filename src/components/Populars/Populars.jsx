import React, { useState } from "react";
import useMultipleFetch from "../../hooks/useMultipleFetch";
import { URI } from "../../settings/config";
import PopularCard from "../PopularCard/PopularCard";
import styles from "./Populars.module.css";

const Populars = () => {
  const [metaDataUrls, setMetaDataUrls] = useState([
    `${URI}/metadata/1`,
    `${URI}/metadata/1027`,
    `${URI}/metadata/1839`,
  ]);

  const { data, error, isLoaded } = useMultipleFetch(metaDataUrls);

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        data.map((item) => <PopularCard key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Populars;
