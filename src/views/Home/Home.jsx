import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Landing from "../../components/Landing/Landing";
import Populars from "../../components/Populars/Populars";

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
      <Landing />
      <Populars popMetaDatas={popMetaDatas} popPrices={popPrices} />
    </div>
  );
};

export default Home;
