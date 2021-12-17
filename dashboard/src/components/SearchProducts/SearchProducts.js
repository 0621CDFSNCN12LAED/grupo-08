import React, { useState } from "react";
import data from "./data";

const SearchProducts = () => {
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = data.productData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-lable h4 font-weight-bold">
              Busca un producto
            </label>
            <input
              type="text"
              className="from-control"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>

        {dataSearch.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.images} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">{item.title}</h5>
                  <p className="card-text">{item.productDescription}</p>
                  <p className="card-subtitle text-success font-weight-bold">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchProducts;

/*import React, { useEffect, useRef, useState } from "react";

const apiURL = "http://localhost:3001/list";

function SearchProducts() {
  const [productos, setProductos] = useState([]);
  const searchInput = useRef();
  const [keyword, setKeyword] = useState("");

  // Credenciales de API

  async function searchAPI(keywords) {
    const response = await fetch(
      `http://localhost:3001/list/search?keyword=${keywords}`
    );
    const result = await response.json();
    console.log(result);
    setProductos(result.Error ? [] : result.Search);
  }

  function onSubmit(event) {
    event.preventDefault();
    setKeyword(searchInput.current.value);
  }

  useEffect(() => {
    if (keyword) {
      searchAPI(keyword);
    }
  }, [keyword]);

  return (
    <div className="container-fluid">
      <div className="row my-4">
        <div className="col-12 col-md-6">
          // Buscador //
          <form method="GET" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="">Buscar por producto:</label>
              <input ref={searchInput} type="text" className="form-control" />
            </div>
            <button className="btn btn-info">Search</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Productos para la palabra: {keyword}</h2>
        </div>
         //Listado de productos //        
        {productos.length > 0 &&
          productos.map((producto, i) => {
            return (
              <div className=" col-sm-2 col-md-6 my-4" key={i}>
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                      {producto.title}
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        src={apiURL + producto.images}
                        alt={producto.title}
                        style={{
                          width: "90%",
                          height: "400px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p>{producto.productDescription}</p>
                    <p className="searchProducts-priceProduct">
                      ${producto.price}
                    </p>
                    <p className="searchProducts-discountProduct">
                      {producto.discount}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {productos.length === 0 && (
        <div className="alert alert-warning text-center">
          No se encontraron productos
        </div>
      )}
    </div>
  );
}

export default SearchProducts;*/
