import React from "react";
import IdividualCard from "./IdividualCard.js"
import "./Users.css";

function Cards (){

    return(
        <><div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="align-center h3 mb-0 text-gray-800">Conoce a nuestros usuarios y contacta con los vendedores</h1>
        </div><div>
                <IdividualCard />
            </div></>
    )
}


export default Cards;