import React, { useEffect, useRef, useState } from "react";

const apiURL = "http://localhost:3001";

function SearchProducts() {
  const [productos, setProductos] = useState([]);
  const searchInput = useRef();
  const [keyword, setKeyword] = useState("");

  // Credenciales de API
  const apiKey = "85857357"; // Intenta poner cualquier cosa antes para probar

  async function searchAPI() {
    const response = await fetch(`${apiURL}?apikey=${apiKey}&s=${keyword}`);
    const result = await response.json();
    setProductos(result.Error ? [] : result.Search);
  }

  function onSubmit(event) {
    event.preventDefault();
    setKeyword(searchInput.current.value);
  }

  useEffect(() => {
    if (keyword) {
      searchAPI();
    }
  }, [keyword]);

  return (
    <div className="container-fluid">
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="">Buscar por producto:</label>
                  <input
                    ref={searchInput}
                    type="text"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-info">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Productos para la palabra: {keyword}</h2>
            </div>
            {/* Listado de productos */}
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
                              width: "400px",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p> $ {producto.price}</p>
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
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">
          Eyyyy... ¿PUSISTE TU APIKEY?
        </div>
      )}
    </div>
  );
}

export default SearchProducts;
