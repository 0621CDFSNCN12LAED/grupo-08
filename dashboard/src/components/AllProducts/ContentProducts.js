import React from "react";
import ProductInDb from "./ProductInDb";
import "./AllProducts.css";

function ContentProducts() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Nuestros productos</h1>
      </div>

      <ProductInDb />
    </div>
  );
}

export default ContentProducts;
