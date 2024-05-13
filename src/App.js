import React from "react";
import { Route, Routes } from "react-router-dom";

import { Main } from "./pages/Main";
import Headers from "./containers/Headers";
import { Product } from "./pages/Product";

const App = () => {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
