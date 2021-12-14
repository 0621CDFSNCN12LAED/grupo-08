import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Error404 from "./components/Error404/Error404";
import OfertProduct from "./components/OfertProduct/OfertProduct";
import AllProducts from "./components/AllProducts/AllProducts";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/OfertProduct" element={<OfertProduct />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          {/* Si colocás un * es igual a cualquier ruta */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
