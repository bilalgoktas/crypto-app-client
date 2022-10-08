import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

const Header = () => {
  const [isFiatTogglerOpen, setIsFiatTogglerOpen] = useState(false);

  const { setCurrentFiat } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link className={styles.link} to="/cryptos">
          Cryptocurrencies
        </Link>
      </div>
      <div className={styles.centerContainer}>
        <Link className={styles.link} to="/">
          COINN
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <Link className={styles.link} to="/favorites">
          Favorites
        </Link>
        <span onClick={() => setIsFiatTogglerOpen(!isFiatTogglerOpen)}>
          USD
        </span>
        <span>Dark Theme</span>
      </div>
      {isFiatTogglerOpen && (
        <div>
          <button onClick={(e) => setCurrentFiat(e.target.innerText)}>
            USD
          </button>
          <button onClick={(e) => setCurrentFiat(e.target.innerText)}>
            EUR
          </button>
          <button onClick={(e) => setCurrentFiat(e.target.innerText)}>
            GBP
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
