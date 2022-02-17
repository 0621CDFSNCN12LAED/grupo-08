import React, { useState, useEffect } from 'react';
import ProductInDb from "./ProductInDb";
import "./AllProducts.css";

function ContentProducts() {
  const [totalProductos, setTotalProductos] = useState([])
  /* Este código brinda el número total de los productos */
  useEffect(() =>{
    fetch("http://localhost:3001/list")
    .then(response => response.json())
    .then(results =>{
      setTotalProductos(results.total)
      console.log(results);
    })
    .catch(error => console.log("error"))
  }, [])
  return (
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Lista de todos los productos ({totalProductos})</h1>
      </div>

      <ProductInDb />
    </div>
  );
}

export default ContentProducts;
