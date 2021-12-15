/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';
import './ofertProduct.css';
import { Card, Button } from 'react-bootstrap';

function ContentOfertProduct() {
  const inicioUrl = "http://localhost:3001/"
  const [productos, setProductos] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3001/list")
    .then(response => response.json())
    .then(results =>{
      setProductos(results.data)
      console.log(results);
    })
    .catch(error => console.log("error"))
  }, [])

  
  return (
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Productos en oferta!</h1>
      </div>
        <main className='d-sm-flex aligns-items-center mb-4 boxContainer-productOfert'>
          
          { productos.filter(producto =>{
            return producto.discount !== 0
          }).map((producto, i) =>{
            return(
                <div className='cardProduct_container' key={i}>
                  <Card className="cardProduct_container" style={{ width: '18rem', }} key={i}>
                    <div className="cardProduct_card">
                      <Card.Img variant="top" src={inicioUrl + producto.images}/>
                      <Card.Body className="bodyCard">
                          <Card.Title>{producto.title}</Card.Title>
                          <Card.Text className="textCard">
                          {producto.productDescription}
                          </Card.Text>

                          <div className="containerBottom_card">
                              <ul className="list-group list-group-flush">
                              <li className="list-group-item" className="allProducts-price-discountContainer allProducts-priceProduct">
                                ${producto.price}
                              </li>
                              <li className="list-group-item" className="allProducts-price-discountContainer allProducts-discountProduct">
                                {producto.discount}%
                              </li>
                            </ul>
                              <Button className="btn-product" variant="primary">Ver producto</Button>
                              <Button className="btn-cart" variant="success">Añadir al carrito</Button>
                          </div>
                      </Card.Body>
                    </div> 
                  </Card>
                </div>
            )
          })
          } 
        </main>
    </div>
  );
}

export default ContentOfertProduct;