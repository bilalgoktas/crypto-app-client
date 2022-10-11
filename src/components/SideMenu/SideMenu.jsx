import React from "react";
import styles from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const SideMenu = ({ isSideMenuOpen }) => {
  return (
    <nav
      className={classNames(styles.container, isSideMenuOpen && styles.open)}
    >
      <h2 className={styles.title}>menu</h2>

      <ul>
        <li>
          <NavLink to="/cryptos">Cryptocurrencies</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
