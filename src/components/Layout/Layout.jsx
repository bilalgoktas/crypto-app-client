import React, { useContext, useState } from "react";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AppContext } from "../../contexts/AppContext";
import SideMenu from "../SideMenu/SideMenu";
import BackDrop from "../BackDrop/BackDrop";

const Layout = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const { currentTheme } = useContext(AppContext);
  return (
    <div className={styles.master} theme={currentTheme}>
      <Header setIsSideMenuOpen={setIsSideMenuOpen} />

      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />

      {isSideMenuOpen && <BackDrop setIsSideMenuOpen={setIsSideMenuOpen} />}
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
