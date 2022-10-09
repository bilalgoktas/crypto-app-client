import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import downArrow from "../../assets/svg/arrow-down.svg";
import upArrow from "../../assets/svg/arrow-up.svg";

const Header = () => {
  const [isFiatTogglerOpen, setIsFiatTogglerOpen] = useState(false);

  const { currentFiat, setCurrentFiat, fiatsArray } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link className={styles.link} to="/cryptos/all">
          Cryptocurrencies
        </Link>
        <Link className={styles.link} to="/news">
          News
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
          {currentFiat.symbol} {currentFiat.name}
          {isFiatTogglerOpen ? (
            <img className={styles.arrowIcon} src={upArrow} alt="up arrow" />
          ) : (
            <img
              className={styles.arrowIcon}
              src={downArrow}
              alt="down arrow"
            />
          )}
        </span>
        <span>Dark Theme</span>
      </div>
      {isFiatTogglerOpen && (
        <div className={styles.fiatSwitchContainer}>
          {fiatsArray.map((fiat, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentFiat({ symbol: fiat.symbol, name: fiat.name });
                setIsFiatTogglerOpen(!isFiatTogglerOpen);
              }}
            >
              {fiat.symbol} {fiat.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
