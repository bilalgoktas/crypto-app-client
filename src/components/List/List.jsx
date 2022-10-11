import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";

const List = ({ data, error, isLoaded }) => {
  const { currentFiat } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className={styles.rank}>Rank</th>
            <th></th>
            <th className={styles.name}>Name</th>
            <th className={styles.price}>Price ({currentFiat.symbol})</th>
            <th className={styles.change}>Change 24h</th>
            <th className={styles.volume}>Volume ({currentFiat.symbol})</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              cmc_rank={item.cmc_rank}
              name={item.name}
              symbol={item.symbol}
              quote={item.quote}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
