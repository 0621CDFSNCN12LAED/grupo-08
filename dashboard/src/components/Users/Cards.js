import React, { useState, useEffect } from "react";
import IdividualCard from "./IdividualCard.js"
import "./Users.css"


function Cards (){
  const [results, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/userList")
      .then((response) => response.json())
      .then((results) => {
        setUsers(results.total);
        console.log(results);
      })
      .catch((error) => console.log("error in fetch"));
  }, []);



    return(
        <><div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="align-center h3 mb-0 text-gray-800">Conoce a nuestros usuarios y contacta con los vendedores. De momento tenemos <span className="totalUsers">{results} </span>usuarios</h1>
        </div><div>
                <IdividualCard />
            </div></>
    )
}

export default Cards;