import React from 'react';
import './Home.css';
import SmallCard from './SmallCard';

let moviesInDB = {
    title: 'Productos en nuestras tiendas',
    color: 'primary', 
    cuantity: 22,
    icon: 'fas fa-tshirt'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total de Sucursales', 
    color:'success', 
    cuantity: '9',
    icon:'fas fa-building'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Productos en Oferta' ,
    color:'warning',
    cuantity:'12',
    icon:'fas fa-tag'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowProduct() {
  return (
    <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
  );
}

export default ContentRowProduct;