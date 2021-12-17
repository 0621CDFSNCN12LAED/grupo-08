import React, { useState, useEffect } from "react";
import "./Users.css";
import { Card, Button } from "react-bootstrap";

function UsersInDb() {
  const inicioUrl = "http://localhost:3001/";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/userList")
      .then((response) => response.json())
      .then((results) => {
        setUsers(results.data);
        console.log(results);
      })
      .catch((error) => console.log("error in fetch"));
  }, []);

  
// var resultCounter = users.length
// console.log(resultCounter)

  
  return (
    <main className="d-sm-flex aligns-items-center justify-content-between mb-4 boxContainer-productOfert">
      {users.map((users, i) => {
        return (
          <div className="col-lg-6 mb-4 card card-body" key={i}>
            <Card style={{ width: "18rem" }} key={i}>
              <Card.Img variant="top" src={inicioUrl + users.userImage} />
              <Card.Body>
                {users.firstName}
                <br></br>
                {users.lastName}
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                    className="allProducts-price-discountContainer allProducts-priceProduct"
                  >
                  </li>
                </ul>

                <Button variant="primary">contactar con vendedor</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </main>
  );
}

export default UsersInDb;