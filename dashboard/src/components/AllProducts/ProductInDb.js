import React, { useState, useEffect } from "react";
import "./AllProducts.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductInDb() {
  const inicioUrl = "http://localhost:3001/";
  const [productos, setProductos] = useState([]);

  let rutaParametrizadas = "ProductDetail/"

  useEffect(() => {
    fetch("http://localhost:3001/list")
      .then((response) => response.json())
      .then((results) => {
        setProductos(results.data);
        console.log(results);
      })
      .catch((error) => console.log("error"));
  }, []);

  return (
    <main className="d-sm-flex aligns-items-center justify-content-between mb-4 boxContainer-productOfert row">
      {productos.map((producto, i) => {
        return (
          <div className="col-lg-6 mb-4 card card-body" key={i}>
            <Card style={{ width: "" }} key={i}>
              <Card.Img variant="top" src={inicioUrl + producto.images} />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.productDescription}</Card.Text>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item allProducts-price-discountContainer allProducts-priceProduct">
                    ${producto.price}
                  </li>
                  <li className="list-group-item allProducts-price-discountContainer allProducts-discountProduct">
                    {producto.discount}%
                  </li>
                </ul>

                <Link exact to={rutaParametrizadas + producto.id}><Button variant="primary">Ver más detalles</Button></Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </main>
  );
}

export default ProductInDb;

/*import React from "react";
import "./AllProducts.css";
import image from "../../assets/images/logo192.png";
import PropTypes from "prop-types";

function ProductInDb(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">{props.title}</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              src={image}
              alt=" Star Wars - Mandalorian "
            />
          </div>
          <p>{props.productDescription}</p>
          <p>{props.price}</p>
          <p>{props.discount}</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            Más detalles del producto
          </a>
        </div>
      </div>
    </div>
  );
}

ProductInDb.propTypes = {
  title: PropTypes.string.isRequired,
  productDescription: PropTypes.string,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
};
ProductInDb.defaultProps = {
  productDescription: "Producto sin descripción detallada.",
  discount: "",
};

export default ProductInDb;*/
