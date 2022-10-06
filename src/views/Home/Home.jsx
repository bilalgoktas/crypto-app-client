import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import Landing from "../../components/Landing/Landing";
import Populars from "../../components/Populars/Populars";
import TopList from "../../components/TopList/TopList";

const Home = () => {
  return (
    <div className={styles.container}>
      <Landing />
      <Populars />
      <TopList />
    </div>
  );
};

export default Home;
