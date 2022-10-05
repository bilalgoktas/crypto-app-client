import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import useMultipleFetch from "../../hooks/useMultipleFetch";

const Home = () => {
  const [popMetaDatas, setPopMetaDatas] = useState([]);
  const [popPrices, setPopPrices] = useState([]);
  useEffect(() => {
    const metaDataUrls = [
      "http://localhost:5000/metadata/1",
      "http://localhost:5000/metadata/2",
      "http://localhost:5000/metadata/3",
    ];
    Promise.all(metaDataUrls.map((url) => fetch(url)))
      .then((results) => Promise.all(results.map((result) => result.json())))
      .then((data) => setPopMetaDatas(data));
  });
  const priceUrls = [
    "http://localhost:5000/price/1",
    "http://localhost:5000/price/2",
    "http://localhost:5000/price/3",
  ];
  Promise.all(priceUrls.map((url) => fetch(url)))
    .then((results) => Promise.all(results.map((result) => result.json())))
    .then((data) => setPopPrices(data));

  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <h1>
          <span>C</span>OINN
        </h1>
        <h3>Just keep updated!</h3>
      </div>
      <div className={styles.cards}>
        {popMetaDatas.map((item, index) => (
          <div key={index} className={styles.cryptoCard}>
            <div className={styles.topSection}>
              <img src={item.data[1].logo} alt={item.data[1].name} />
              <div className={styles.change}>
                <p className={styles.period}>Last 24hrs</p>
                <p className={styles.percentage}>
                  {popPrices[index].data[1].quote[
                    "USD"
                  ].percent_change_24h.toFixed(2)}
                  %
                </p>
              </div>
            </div>
            <p className={styles.coinName}>
              {item.data[1].symbol} <span>{item.data[1].name}</span>
            </p>
            <p className={styles.price}>
              <span>$</span>
              {popPrices[index].data[1].quote["USD"].price.toLocaleString(
                "de-DE",
                { minimumFractionDigits: 2, maximumFractionDigits: 2 }
              )}
            </p>
            <div className={styles.volume}>
              <p>Volume in last 24hrs</p>
              <p className={styles.volumeNumber}>
                $
                {popPrices[index].data[1].quote[
                  "USD"
                ].volume_24h.toLocaleString("de-DE", {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
