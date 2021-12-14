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
    <main className='d-sm-flex aligns-items-center justify-content-between mb-4 boxContainer-productOfert'>
       
       { productos.map((producto, i) =>{
        return(
          <div className=''key={i}>
            <Card style={{ width: '18rem' }} key={i}> 
                <Card.Img variant="top" src={inicioUrl + producto.images}/>
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                    {producto.productDescription}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </div>
        )
      })
      } 
    </main>
  );
}

export default ContentOfertProduct;