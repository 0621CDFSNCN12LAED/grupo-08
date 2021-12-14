import React from "react";
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

export default ProductInDb;

/*id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    productDescription TEXT NULL,
    price DECIMAL NOT NULL,
    discount INT(10) NULL,
    images VARCHAR(100) NOT NULL,
    */
