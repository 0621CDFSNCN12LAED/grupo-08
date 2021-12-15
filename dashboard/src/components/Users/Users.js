import React from "react";
import Cards from "./Cards.js"
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Users.css";

function Users() {
  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <NavBar />
          <Cards />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Users;