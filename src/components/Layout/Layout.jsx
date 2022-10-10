import React, { useContext } from "react";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AppContext } from "../../contexts/AppContext";

const Layout = ({ children }) => {
  const { currentTheme } = useContext(AppContext);
  return (
    <div className={styles.master} theme={currentTheme}>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
