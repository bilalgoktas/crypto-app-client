import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [currentFiat, setCurrentFiat] = useState(
    localStorage.getItem("currentFiat") || "USD"
  );
  const [favCryptos, setFavCryptos] = useState(
    JSON.parse(localStorage.getItem("favCryptos")) || []
  );

  useEffect(() => {
    localStorage.setItem("favCryptos", JSON.stringify(favCryptos));
  }, [favCryptos]);

  useEffect(() => {
    localStorage.setItem("currentFiat", currentFiat);
  }, [currentFiat]);

  const addToFav = async (e, item) => {
    e.stopPropagation();
    setFavCryptos((prevState) => [...prevState, item]);
  };

  const removeFromFav = async (e, id) => {
    e.stopPropagation();
    const favsToSet = favCryptos.filter((item) => item.id !== id);
    setFavCryptos(favsToSet);
  };

  const value = {
    favCryptos,
    setFavCryptos,
    addToFav,
    removeFromFav,
    currentFiat,
    setCurrentFiat,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
