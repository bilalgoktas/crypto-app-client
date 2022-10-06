import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [currentFiat, setCurrentFiat] = useState("USD");
  const [favCryptos, setFavCryptos] = useState([]);

  const addToFav = (e, item) => {
    e.preventDefault();
    setFavCryptos((prevState) => [...prevState, item]);
  };

  const removeFromFav = (e, id) => {
    e.preventDefault();
    setFavCryptos(favCryptos.filter((item) => item.id !== id));
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
