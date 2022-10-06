import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import Landing from "../../components/Landing/Landing";
import Populars from "../../components/Populars/Populars";
import TopList from "../../components/TopList/TopList";
import { AppContext } from "../../contexts/AppContext";

const Home = () => {
  const [popMetaDatas, setPopMetaDatas] = useState([]);
  const [popPrices, setPopPrices] = useState([]);

  const { addToFav, removeFromFav } = useContext(AppContext);

  useEffect(() => {
    const metaDataUrls = [
      "http://localhost:5000/metadata/1",
      "http://localhost:5000/metadata/2",
      "http://localhost:5000/metadata/3",
    ];
    Promise.all(metaDataUrls.map((url) => fetch(url)))
      .then((results) => Promise.all(results.map((result) => result.json())))
      .then((data) => setPopMetaDatas(data));
    const priceUrls = [
      "http://localhost:5000/price/1",
      "http://localhost:5000/price/2",
      "http://localhost:5000/price/3",
    ];
    Promise.all(priceUrls.map((url) => fetch(url)))
      .then((results) => Promise.all(results.map((result) => result.json())))
      .then((data) => setPopPrices(data));
  });

  return (
    <div className={styles.container}>
      <Landing />
      <Populars popMetaDatas={popMetaDatas} popPrices={popPrices} />
      <TopList />
    </div>
  );
};

export default Home;
