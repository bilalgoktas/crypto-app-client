import React, { useEffect, useState } from "react";
import PopularCard from "../PopularCard/PopularCard";
import styles from "./Populars.module.css";

const Populars = () => {
  const [popMetaDatas, setPopMetaDatas] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const metaDataUrls = [
      "http://localhost:5000/metadata/1",
      "http://localhost:5000/metadata/2",
      "http://localhost:5000/metadata/3",
    ];
    Promise.all(metaDataUrls.map((url) => fetch(url)))
      .then((results) => Promise.all(results.map((result) => result.json())))
      .then((data) => setPopMetaDatas(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  });

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        popMetaDatas.map((item, index) => (
          <PopularCard key={index} index={index} item={item} />
        ))
      )}
    </div>
  );
};

export default Populars;
