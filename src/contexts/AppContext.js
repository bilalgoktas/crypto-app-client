import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [currentFiat, setCurrentFiat] = useState(
    JSON.parse(localStorage.getItem("currentFiat")) || {
      symbol: "$",
      name: "USD",
    }
  );
  const [favCryptos, setFavCryptos] = useState(
    JSON.parse(localStorage.getItem("favCryptos")) || []
  );

  const [currentTheme, setCurrentTheme] = useState(
    JSON.parse(localStorage.getItem("currentTheme")) || "light"
  );

  useEffect(() => {
    localStorage.setItem("favCryptos", JSON.stringify(favCryptos));
  }, [favCryptos]);

  useEffect(() => {
    localStorage.setItem("currentFiat", JSON.stringify(currentFiat));
  }, [currentFiat]);

  useEffect(() => {
    localStorage.setItem("currentTheme", JSON.stringify(currentTheme));
  }, [currentTheme]);

  const addToFav = async (e, item) => {
    e.stopPropagation();
    setFavCryptos((prevState) => [...prevState, item]);
  };

  const removeFromFav = async (e, id) => {
    e.stopPropagation();
    const favsToSet = favCryptos.filter((item) => item.id !== id);
    setFavCryptos(favsToSet);
  };

  const fiatsArray = [
    { symbol: "$", name: "USD" },
    { symbol: "€", name: "EUR" },
    { symbol: "£", name: "GBP" },
  ];

  const value = {
    favCryptos,
    setFavCryptos,
    addToFav,
    removeFromFav,
    currentFiat,
    setCurrentFiat,
    fiatsArray,
    currentTheme,
    setCurrentTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
