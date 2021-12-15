import React from 'react';
import './Home.css';
import ImagenProducto from "../../assets/images/barcelona-nike.jpg"

function ProductSale(props) {
  return (
    <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Producto más vendido</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 imageProductHome" src={ImagenProducto} alt=" Imagen Producto "/>
                    </div>
                    <p>{props.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle producto</a>
                </div>
            </div>
        </div>
  );
}

export default ProductSale;