import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navigator = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cryptos" element={<Cryptos />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default Navigator;
