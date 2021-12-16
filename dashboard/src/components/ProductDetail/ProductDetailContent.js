import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./ProductDetail.css";
import {Button, Modal} from 'react-bootstrap'

function ProductDetailContent (){
    const inicioUrl = "http://localhost:3001/"
    const params = useParams();
    const [productDetail, setProductDetail] = useState([])
    /* Modal Bootstrap */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() =>{
        fetch(`http://localhost:3001/list/${params.id}`)
        .then(response => response.json())
        .then(results =>{
            setProductDetail(results.data)
            console.log(results.data);
        })
        .catch(error => console.log("error"))
      }, [])


    return(
        <main className="productDetail_container">
        <div className="productDetail_image-title">
        <h1>{productDetail.title}</h1>
        <img src={inicioUrl + productDetail.images} alt={productDetail.images} />
        </div>
        <div className="productDetail_data">
        <h2>Descripción:</h2>
        <p className="productDetail_description">{productDetail.productDescription}</p>
        <p className="productDetail_stock">Unidades en Stock: {productDetail.stock}</p>
        <div className="productDetail_price-discount_Container">
        <p className="productDetail_price">${productDetail.price}</p>
        {productDetail.discount !== 0 ? <p className="productDetail_discount">%{productDetail.discount}</p> : ""}
        </div>
        <Button className="btn-añadirAlCarrito_productDetail" variant="primary" onClick={handleShow}>Añadir al carrito</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Se añadió el producto al carrito!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Si haces una compra de 5 o más productos el envío es gratis :)</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ver carrito
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </main>
    )
}


export default ProductDetailContent;