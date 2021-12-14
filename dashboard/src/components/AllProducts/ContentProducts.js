import React from "react";
import ContentRowCenterProducts from "./ContentRowCenterProducts";
import "./AllProducts.css";

function ContentProducts() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <ContentRowCenterProducts />
    </div>
  );
}

export default ContentProducts;
