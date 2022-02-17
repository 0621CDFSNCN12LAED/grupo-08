import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./ProductDetail.css";
import ProductDetailContent from "./ProductDetailContent";

function ProductDetail (){
    return(
        <div className="pageProductDetail">
        <NavBar/>
        <ProductDetailContent/>
        <Footer/>
       </div>
    )
}


export default ProductDetail;