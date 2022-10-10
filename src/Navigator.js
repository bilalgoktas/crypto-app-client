import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Cryptos from "./views/Cryptos/Cryptos";
import Favorites from "./views/Favorites/Favorites";
import Layout from "./components/Layout/Layout";
import AppContextProvider from "./contexts/AppContext";
import CryptoDetail from "./views/CryptoDetail/CryptoDetail";
import News from "./views/News/News";

const Navigator = () => {
  return (
    <div className="masterDiv">
      <Router>
        <AppContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cryptos" element={<Cryptos />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/crypto/:id" element={<CryptoDetail />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Layout>
        </AppContextProvider>
      </Router>
    </div>
  );
};

export default Navigator;
