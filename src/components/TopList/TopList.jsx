import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./TopList.module.css";

const TopList = () => {
  const [topTwenty, setTopTwenty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/top20")
      .then((response) => response.json())
      .then((list) => setTopTwenty(list));
  }, []);

  return (
    <ul>
      {topTwenty.data?.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          symbol={item.symbol}
          convert={"USD"}
          price={item.quote["USD"].price}
          change={item.quote["USD"].percent_change_24h}
          volume={item.quote["USD"].volume_24h}
        />
      ))}
    </ul>
  );
};

export default TopList;
